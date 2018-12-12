import React from 'react';
import { connect } from 'react-redux';
import { getReadableStories, getArchivedStories } from '../../../selectors/story.selector';
import { IStoreState } from '../../../models/store-state.model';
import StoriesGrid from './stories-grid/stories-grid';
import Button from '../../shared/button/button';
import { IHit } from '../../../models/search-result.model';
import { doFetchStories } from '../../../actions/story.action';
import { STORIES_FETCH } from '../../../constants/action-types';
import { doCleanError } from '../../../actions/err.action';
import { doSetCurrentSearch } from '../../../actions/search.action';

type Props = {
	store: IStoreState,
	onFetchStories: (query, page) => void,
	cleanErr: (id) => void,
	setCurrentPageNumber: (page) => void
};

type State = {
	showingStories: IHit[],
	fetchingPage: number
};

class Stories extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			showingStories: [],
			fetchingPage: 0 // is not fetching
		};

		this.showArchived = this.showArchived.bind(this);
		this.showReadable = this.showReadable.bind(this);
		this.infinityScroll = this.infinityScroll.bind(this);
	}

	componentDidMount() {
		document.addEventListener('scroll', this.infinityScroll, true);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.infinityScroll, true);
	}

	componentDidUpdate(prevProps) {
		if (this.props.store.storyState !== prevProps.store.storyState) {
			// everytime got new stories, show readable as default
			this.showReadable();
		} else if (this.props.store.errState !== prevProps.store.errState) {
			// if http err happens, reset fetchingPage indicate user can fetch that page again
			const err = this.props.store.errState.find(error => error.type === STORIES_FETCH);
			if (err) {
				this.setState({ fetchingPage: 0 });
				this.props.cleanErr(err.id);
			}
		}
	}

	// monitors where user is and starting fetching data at some point
	infinityScroll() {
		// used to dynamically change pagination's active page
		this.changePageNumber(document.querySelectorAll('.is-page-head'));
		const currentScrollPosition = this.getScrollBarPercentage();
		if (currentScrollPosition > 0.8 && currentScrollPosition < 0.82) { // one scroll can fire multiple event, so give it a threshold
			const { query, page } = this.props.store.searchState;
			const nextPage = page + 1;
			// if next page is alraedy been fetching, don't call it again
			if (this.state.fetchingPage !== nextPage) {
				this.props.onFetchStories(query, nextPage);
				this.setState({ fetchingPage: nextPage });
			}
		}
	}

	changePageNumber(nodes: NodeListOf<HTMLDivElement>) {
		for (let i = 0; i < nodes.length; i++) {
			const distanceBetweenEleAndViewTop = nodes[i].offsetTop - window.scrollY;
			if (distanceBetweenEleAndViewTop < 100 && distanceBetweenEleAndViewTop > 0) { // at around 10% of page but haven't become invisible
				this.props.setCurrentPageNumber(i);
				break;
			}
		}
	}

	getScrollBarPercentage() {
		// scrolled length / (total height - visible height) aka scrollable length
		return window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	}

	showArchived() {
		this.setState({
			showingStories: getArchivedStories(this.props.store)
		});
	}

	showReadable() {
		this.setState({
			showingStories: getReadableStories(this.props.store)
		});
	}

	render() {
		return (
			<>
				<Button onClick={this.showArchived} cls="secondary">Show Archived</Button>
				<Button onClick={this.showReadable} cls="secondary">Show Readable</Button>
				<StoriesGrid stories={this.state.showingStories} />
			</>
		);
	}
}

const mapStateToProps = (state: IStoreState) => ({
	store: state
});

const mapDispatchToProps = dispatch => ({
	onFetchStories: (query, page) => dispatch(doFetchStories(query, page)),
	cleanErr: (errId) => dispatch(doCleanError(errId)),
	setCurrentPageNumber: (page) => dispatch(doSetCurrentSearch(page))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Stories);

import React from 'react';
import './stories.scss';
import { connect } from 'react-redux';
import { getFetchError, getReadableStories, getArchivedStories, getStories } from '../selectors/story';
import { StoreState } from '../models/store-state';
import StoriesGrid from './stories-grid';

class Stories extends React.Component<{ store, err }, {showingStories}> {
	constructor(props) {
		super(props);

		this.state = {
			showingStories: []
		};

		this.showArchived = this.showArchived.bind(this);
		this.showReadable = this.showReadable.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.showReadable(nextProps.store);
		}
	}

	showArchived() {
		this.setState({
			showingStories: getArchivedStories(this.props.store)
		});
	}

	showReadable(newStore?: StoreState) {
		this.setState({
			showingStories: getReadableStories(newStore || this.props.store)
		});
	}

	render() {
		return (
			<>
				<button className="btn btn-secondary" onClick={this.showArchived}>Show Archived</button>
				<button className="btn btn-secondary" onClick={() => this.showReadable()}>Show Readable</button>
				<StoriesGrid stories={this.state.showingStories} />
			</>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	store: state,
	err: getFetchError(state)
});

export default connect(
	mapStateToProps
)(Stories);

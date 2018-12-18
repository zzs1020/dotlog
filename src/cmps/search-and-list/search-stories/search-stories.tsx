import React from 'react';
import { doFetchStories } from '../../../actions/story.action';
import { connect } from 'react-redux';
import Button from '../../shared/button/button';
import { doAddLoader } from '../../../actions/loader.action';

type Props = {
	onFetchStories: (q: string) => void
};

type State = {
	query: string
};

class SearchStories extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		const { query } = this.state;

		if (query) {
			this.props.onFetchStories(query);
		}

		event.preventDefault();
	}

	onChange(event) {
		const { value } = event.target;
		this.setState({ query: value });
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className="form-inline">
				<input type="text" className="form-control" value={this.state.query} onChange={this.onChange} />
				<Button cls="primary" type="submit">Search</Button>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onFetchStories: query => {
		dispatch(doAddLoader('storiesGrid'));
		dispatch(doFetchStories(query));
	}
});

export default connect(
	null,
	mapDispatchToProps
)(SearchStories);

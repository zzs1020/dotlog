import React from 'react';
import { doFetchStories } from '../actions/story';
import { connect } from 'react-redux';

class SearchStories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        }
    }

    onSubmit(event) {
        const {query} = this.state;
        
        if (query) {
            this.props.onFetchStories(query);
            this.setState({query: ''});
        }

        event.preventDefault();
    }

    onChange(event) {
        const {value} = event.target;
        this.setState({query: value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.query} onChange={this.onChange} />
                <button type="submit">Search</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchStories: query => dispatch(doFetchStories(query))
});

export default connect(
    null,
    mapDispatchToProps
)(SearchStories);

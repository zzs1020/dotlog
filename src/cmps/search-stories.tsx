import React from 'react';
import { doFetchStories } from '../actions/story';
import { connect } from 'react-redux';

class SearchStories extends React.Component<{onFetchStories}, {query}> {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const {query} = this.state;
        
        if (query) {
            this.props.onFetchStories(query);
        }

        event.preventDefault();
    }

    onChange(event) {
        const {value} = event.target;
        this.setState({query: value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-inline">
                <input type="text" className="form-control" value={this.state.query} onChange={this.onChange} />
                <button className="btn btn-primary" type="submit">Search</button>
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

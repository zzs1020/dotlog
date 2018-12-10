import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../../models/store-state';
import { ISearchState } from '../../../models/search-state';
import { doFetchStories } from '../../../actions/story';

type Props = {
	currentSearch: ISearchState,
	onFetchStories: (query, page) => void
};

const Pagination = ({ currentSearch, onFetchStories }: Props) => {
	const { page, query, totalPages } = currentSearch;
	return (
		<nav>
			<ul className="pagination">
				<li className={`page-item ${page === 0 ? 'disabled' : ''}`} onClick={() => onFetchStories(query, page - 1)}>
					<a className="page-link" href="#">&laquo;</a>
				</li>
				{/** Array(number) only creates a new empty slots with length set up, no actual undefined value inserted */}
				{(Array.apply(null, Array(totalPages))).map((_, i) =>
					<li key={i} className={`page-item ${page === i ? 'active' : ''}`} onClick={() => onFetchStories(query, i)}>
						<a className="page-link" href="#">{i + 1}</a>
					</li>
				)}
				<li className={`page-item ${page === totalPages - 1 ? 'disabled' : ''}`} onClick={() => onFetchStories(query, page + 1)}>
					<a className="page-link" href="#">&raquo;</a>
				</li>
			</ul>
		</nav>
	);
};

const mapStateToProps = (state: IStoreState) => {
	return {
		currentSearch: state.searchState
	};
};

const mapDispatchToProps = dispatch => ({
	onFetchStories: (query, page) => dispatch(doFetchStories(query, page))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pagination);

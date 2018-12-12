import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../../models/store-state.model';
import { ISearchState } from '../../../models/search-state.model';
import { doFetchStories } from '../../../actions/story.action';
import './pagination.scss';

type Props = {
	currentSearch: ISearchState,
	onFetchStories: (query, page) => void
};

const Pagination = ({ currentSearch, onFetchStories }: Props) => {
	const { page, query, totalPages } = currentSearch;
	const limitedPages = getLimitedPages(page + 1, totalPages);
	return (
		<nav>
			<ul className="my-pagination">
				<li className={`pg-item fa-rotate-90 ${page === 0 ? 'disabled' : ''}`} onClick={() => onFetchStories(query, page - 1)}>
					&laquo;
				</li>
				{/** Array(number) only creates a new empty slots with length set up, no actual undefined value inserted */}
				{limitedPages.map(i =>
					<li key={i} className={`pg-item ${page === i - 1 ? 'active' : ''}`} onClick={() => onFetchStories(query, i)}>
						{i}
					</li>
				)}
				<li className={`pg-item fa-rotate-90 ${page === totalPages - 1 ? 'disabled' : ''}`} onClick={() => onFetchStories(query, page + 1)}>
					&raquo;
				</li>
			</ul>
		</nav>
	);
};

// here curPage start from 1 for convenience
const getLimitedPages = (curPage, total) => {
	let pages = [];
	if (total >= 7) {
		if (curPage > 4) {
			for (let i = curPage - 3; i <= curPage + 3; i++) {
				pages.push(i);
			}
		} else {
			pages = [1, 2, 3, 4, 5, 6, 7];
		}
	} else if (total > 1) {
		for (let i = 1; i <= total; i++) {
			pages.push(i);
		}
	}
	return pages;
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

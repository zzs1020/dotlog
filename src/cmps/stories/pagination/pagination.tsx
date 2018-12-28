import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../../models/store-state.model';
import { ISearchState } from '../../../models/search-state.model';
import { doFetchStories } from '../../../actions/story.action';
import './pagination.scss';
import { PAGE_HEAD } from '../../../constants/often-used-string';
import { doSetCurrentSearch } from '../../../actions/search.action';

type Props = {
	currentSearch: ISearchState,
	onFetchStories: (query, page, maxCachedPage) => void
};

const Pagination = ({ currentSearch, onFetchStories }: Props) => {
	const { page, query, totalPages, maxCachedPage: max } = currentSearch;
	const limitedPages = getLimitedPages(page, totalPages);
	return (
		page === 0 ? null :
		<nav>
			<ul className="my-pagination">
				<li className={`pg-item fa-rotate-90 ${page === 1 ? 'disabled' : ''}`} onClick={() => onFetchStories(query, page - 1, max)}>
					&laquo;
				</li>
				{/** Array(number) only creates a new empty slots with length set up, no actual undefined value inserted */}
				{limitedPages.map(i =>
					<li key={i} className={`pg-item ${page === i ? 'active' : ''}`} onClick={() => onFetchStories(query, i, max)}>
						{i}
					</li>
				)}
				<li className={`pg-item fa-rotate-90 ${page === totalPages ? 'disabled' : ''}`} onClick={() => onFetchStories(query, page + 1, max)}>
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
	onFetchStories: (query, page, maxCachedPage) => {
		// call api only if never cached
		if (page > maxCachedPage) {
			dispatch(doFetchStories(query, page));
			dispatch(doSetCurrentSearch(page));
		} else {
			const top = document.getElementById(PAGE_HEAD + page).offsetTop;
			window.scrollTo(0, top); // window.scroll is the same, but this one has more browser support
			dispatch(doSetCurrentSearch(page));
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pagination);

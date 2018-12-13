import { ISearchResult } from '../models/search-result.model';
import { ISearchState } from '../models/search-state.model';
import { IAction } from '../models/action.model';
import { SEARCH_SET_CURRENT } from '../constants/action-types';

export const doSetCurrentSearch = (curPage?: number, query?: string, totalPages?: number): IAction<ISearchState> => {
	return {
		type: SEARCH_SET_CURRENT,
		payload: {
			page: curPage,
			query,
			totalPages
		}
	};
};

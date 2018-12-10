import { ISearchResult } from '../models/search-result';
import { ISearchState } from '../models/search-state';
import { IAction } from '../models/action';
import { SEARCH_SET_CURRENT } from '../constants/action-types';

export const doSetCurrentSearch = ({ query, page, nbPages }: ISearchResult): IAction<ISearchState> => {
	return {
		type: SEARCH_SET_CURRENT,
		payload: {
			query,
			page,
			totalPages: nbPages
		}
	};
};

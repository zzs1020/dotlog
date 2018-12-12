import { ISearchState } from '../models/search-state.model';
import { SEARCH_SET_CURRENT } from '../constants/action-types';
import { IAction } from '../models/action.model';

const INIT_STATE = {
	page: 0,
	totalPages: 0,
	query: ''
};

const searchReducer = (state: ISearchState = INIT_STATE, action: IAction<ISearchState>) => {
	switch (action.type) {
		case SEARCH_SET_CURRENT:
			return applySetCurrentSearch(state, action);
		default:
			return state;
	}
};

const applySetCurrentSearch = (state, action) => {
	 // maintain total pages and query if unchanged
	const newState = {
		page: action.payload.page,
		totalPages: action.payload.totalPages || state.totalPages,
		query: action.payload.query || state.query
	};
	return newState;
};

export default searchReducer;

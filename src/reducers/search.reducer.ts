import { ISearchState } from '../models/search-state.model';
import { SEARCH_SET_CURRENT } from '../constants/action-types';
import { IAction } from '../models/action.model';

const INIT_STATE = {
	page: 0,
	totalPages: 0,
	query: '',
	maxCachedPage: 0
};

const searchReducer = (state: ISearchState = INIT_STATE, action: IAction<ISearchState>) => {
	switch (action.type) {
		case SEARCH_SET_CURRENT:
			return applySetCurrentSearch(state, action);
		default:
			return state;
	}
};

// maintain original value if unchanged
const applySetCurrentSearch = (state, action): ISearchState => {
	const newState = {
		page: action.payload.page || state.page,
		maxCachedPage: state.maxCachedPage < action.payload.page ? action.payload.page : state.maxCachedPage,
		query: action.payload.query || state.query,
		totalPages: action.payload.totalPages || state.totalPages
	};
	return newState;
};

export default searchReducer;

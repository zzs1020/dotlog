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
			return action.payload;
		default:
			return state;
	}
};

export default searchReducer;

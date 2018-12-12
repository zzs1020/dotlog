import { STORIES_ADD } from '../constants/action-types';
import { IAction } from '../models/action.model';
import { IHit } from '../models/search-result.model';
const INITIAL_STATE: IHit[] = [];

const storyReducer = (state: IHit[] = INITIAL_STATE, action: IAction<IHit[]>) => {
	switch (action.type) {
		case STORIES_ADD:
			return applyAddStories(state, action);
		default:
			return state;
	}
};

const applyAddStories = (state, action: IAction<IHit[]>) => {
	if (action.payload.length === 0) {
		return state;
	}
	return [...state, ...action.payload];
};

export default storyReducer;

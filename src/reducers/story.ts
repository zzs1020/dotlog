import { STORIES_ADD } from '../constants/action-types';
import { IAction } from '../models/action';
import { IHit } from '../models/search-result';
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
	return [...state, ...action.payload];
};

export default storyReducer;

import { STORIES_ADD } from '../constants/action-types';
import { IAction } from '../models/action';
import { IHit } from '../models/search-result';
const INITIAL_STATE: IHit[] = [];

const storyReducer = (state: IHit[] = INITIAL_STATE, action: IAction<IHit[]>) => {
	switch (action.type) {
		case STORIES_ADD:
			return applyAddStories(action);
		default:
			return state;
	}
};

const applyAddStories = (action: IAction<IHit[]>) => action.payload;

export default storyReducer;

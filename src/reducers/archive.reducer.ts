import { STORY_ARCHIVE } from '../constants/action-types';
import { IAction } from '../models/action.model';

const INITIAL_STATE = [];

const archiveReducer = (state: string[] = INITIAL_STATE, action: IAction<string>): string[] => {
	switch (action.type) {
		case STORY_ARCHIVE:
			return applyArchiveStory(state, action);
		default:
			return state;
	}
};

const applyArchiveStory = (state: string[], action): string[] => {
	return [...state, action.payload];
};

export default archiveReducer;

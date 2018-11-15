import { STORY_ARCHIVE } from '../constants/action-types';

const INITIAL_STATE = [];

const archiveReducer = (state: string[] = INITIAL_STATE, action): string[] => {
	switch (action.type) {
		case STORY_ARCHIVE:
			return applyArchiveStory(state, action);
		default:
			return state;
	}
};

const applyArchiveStory = (state: string[], action): string[] => {
	return [...state, action.id];
};

export default archiveReducer;

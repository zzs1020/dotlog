import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/action-types';
import { IStoryState } from '../models/story-state';
const INITIAL_STATE: IStoryState = {
	stories: [],
	err: null
};

const storyReducer = (state: IStoryState = INITIAL_STATE, action): IStoryState => {
	switch (action.type) {
		case STORIES_ADD:
			return applyAddStories(action);
		case STORIES_FETCH_ERROR:
			return applyFetchErrorStories(action);
		default:
			return state;
	}
};

const applyAddStories = (action): IStoryState => ({
	stories: action.payload,
	err: null
});

const applyFetchErrorStories = (action): IStoryState => ({
	stories: [],
	err: action.payload
});

export default storyReducer;

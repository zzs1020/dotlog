import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/action-types';
import { StoryState } from '../models/story-state';
const INITIAL_STATE: StoryState = {
	stories: [],
	err: null
};

const applyAddStories = (action): StoryState => ({
	stories: action.stories,
	err: null
});

const applyFetchErrorStories = (action): StoryState => ({
	stories: [],
	err: action.err
});

const storyReducer = (state: StoryState = INITIAL_STATE, action): StoryState => {
	switch (action.type) {
		case STORIES_ADD:
			return applyAddStories(action);
		case STORIES_FETCH_ERROR:
			return applyFetchErrorStories(action);
		default:
			return state;
	}
};

export default storyReducer;

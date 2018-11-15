import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/action-types';
const INITIAL_STATE = {
	stories: [],
	err: null
};

const applyAddStories = (action) => ({
	stories: action.stories,
	err: null
});

const applyFetchErrorStories = (action) => ({
	stories: [],
	err: action.err
});

const storyReducer = (state = INITIAL_STATE, action) => {
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

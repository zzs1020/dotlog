import storyReducer from './story';
import archiveReducer from './archive';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	storyState: storyReducer,
	archiveState: archiveReducer
});

export default rootReducer;
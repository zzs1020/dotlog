import { combineReducers } from 'redux';
import archiveReducer from './archive';
import storyReducer from './story';
import todoReducer from './todo';

const rootReducer = combineReducers({
	storyState: storyReducer,
	archiveState: archiveReducer,
	todoState: todoReducer
});

export default rootReducer;

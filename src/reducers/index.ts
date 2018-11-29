import { combineReducers } from 'redux';
import archiveReducer from './archive';
import storyReducer from './story';
import todoReducer from './todo';
import TodosFilterReducer from './todos-filter';

const rootReducer = combineReducers({
	storyState: storyReducer,
	archiveState: archiveReducer,
	todoState: todoReducer,
	todosFilterState: TodosFilterReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import archiveReducer from './archive';
import storyReducer from './story';
import todoReducer from './todo';
import TodosFilterReducer from './todos-filter';
import notificationReducer from './notification.reducer';
import searchReducer from './search.reducer';
import errReducer from './err.reducer';

const rootReducer = combineReducers({
	storyState: storyReducer,
	searchState: searchReducer,
	archiveState: archiveReducer,
	todoState: todoReducer,
	todosFilterState: TodosFilterReducer,
	notificationState: notificationReducer,
	errState: errReducer
});

export default rootReducer;

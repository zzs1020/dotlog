import { combineReducers } from 'redux';
import archiveReducer from './archive.reducer';
import storyReducer from './story.reducer';
import todoReducer from './todo.reducer';
import TodosFilterReducer from './todos-filter.reducer';
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

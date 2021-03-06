import { all, takeEvery } from 'redux-saga/effects';
import { NOTIFICATION_ERROR, STORIES_FETCH, TODO_ADD } from '../constants/action-types';
import { handleFetchStories } from './story.saga';
import { handleAddTodo } from './todo.saga';
import { handleNotification } from './notification.saga';

function* watchAll() {
	yield all([
		watchAddTodo(),
		watchFetchStories(),
		watchNotificationError()
	]);
}

function watchFetchStories() {
	return takeEvery(STORIES_FETCH, handleFetchStories);
}

function watchAddTodo() {
	return takeEvery(TODO_ADD, handleAddTodo);
}

function watchNotificationError() {
	return takeEvery(NOTIFICATION_ERROR, handleNotification);
}

export default watchAll;

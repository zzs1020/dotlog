import { all, takeEvery } from 'redux-saga/effects';
import { STORIES_FETCH, TODO_ADD } from '../constants/action-types';
import { handleFetchStories } from './story';
import { handleAddTodo } from './todo';

function* watchAll() {
	yield all([
		watchAddTodo(),
		watchFetchStories()
	]);
}

function watchFetchStories() {
	return takeEvery(STORIES_FETCH, handleFetchStories);
}

function watchAddTodo() {
	return takeEvery(TODO_ADD, handleAddTodo);
}

export default watchAll;

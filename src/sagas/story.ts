import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchError } from '../actions/story';
import { fetchStories } from '../api/story';

function* handleFetchStories(action) {
	const query = action.payload;
	try {
		const result = yield call(fetchStories, query);
		yield put(doAddStories(result.hits));
	} catch (err) {
		yield put(doFetchError(err));
	}
}

export {
	handleFetchStories
};

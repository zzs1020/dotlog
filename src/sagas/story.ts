import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchError } from '../actions/story';
import { fetchStories } from '../api/story';
import { doSetCurrentSearch } from '../actions/search';

function* handleFetchStories(action) {
	const {query, page} = action.payload;
	try {
		const result = yield call(fetchStories, query, page);
		yield put(doAddStories(result.hits));
		yield put(doSetCurrentSearch(result));
	} catch (err) {
		yield put(doFetchError(err));
	}
}

export {
	handleFetchStories
};

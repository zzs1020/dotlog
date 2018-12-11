import { call, put, all } from 'redux-saga/effects';
import { doAddStories, doFetchError } from '../actions/story';
import { fetchStories } from '../api/story';
import { doSetCurrentSearch } from '../actions/search';
import { STORIES_FETCH } from '../constants/action-types';

function* handleFetchStories(action) {
	const {query, page} = action.payload;
	try {
		const result = yield call(fetchStories, query, page);
		// all() make them parallel
		yield all([
			put(doAddStories(result.hits)),
			put(doSetCurrentSearch(result))
		]);
	} catch (err) {
		yield put(doFetchError(err, STORIES_FETCH));
	}
}

export {
	handleFetchStories
};

import { call, put, all } from 'redux-saga/effects';
import { doAddStories, doFetchError } from '../actions/story.action';
import { fetchStories } from '../api/story.api';
import { doSetCurrentSearch } from '../actions/search.action';
import { STORIES_FETCH } from '../constants/action-types';

function* handleFetchStories(action) {
	const {query, page} = action.payload;
	try {
		const result = yield call(fetchStories, query, page);
		// all() make them parallel
		yield all([
			put(doAddStories(result.hits)),
			// api's curPage start from 0
			put(doSetCurrentSearch(result.page + 1, result.query, result.nbPages))
		]);
	} catch (err) {
		yield put(doFetchError(err, STORIES_FETCH));
	}
}

export {
	handleFetchStories
};

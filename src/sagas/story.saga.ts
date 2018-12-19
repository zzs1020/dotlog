import { call, put, all } from 'redux-saga/effects';
import { doAddStories, doFetchError } from '../actions/story.action';
import { fetchStories } from '../api/story.api';
import { doSetCurrentSearch } from '../actions/search.action';
import { STORIES_FETCH } from '../constants/action-types';
import { doAddLoader, doRemoveLoader } from '../actions/loader.action';

function* handleFetchStories(action) {
	// yield put(doAddLoader('searchBtn'));
	yield put(doAddLoader('storiesGrid'));

	try {
		const {query, page} = action.payload;
		const result = yield call(fetchStories, query, page);
		// all() make them parallel
		yield all([
			put(doAddStories(result.hits)),
			// api's curPage start from 0, here don't set new fetched page as current page (except 1st call)
			// since user may not want to flip to next page (this also to solve the pagination and infinity scroll's race issue)
			put(doSetCurrentSearch(page === 0 ? 1 : null, result.query, result.nbPages)),
			put(doRemoveLoader('storiesGrid'))
		]);
	} catch (err) {
		yield all([
			put(doFetchError(err, STORIES_FETCH)),
			put(doRemoveLoader('storiesGrid'))
		]);
	}
}

export {
	handleFetchStories
};

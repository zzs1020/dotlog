import { STORIES_ADD, STORIES_FETCH, STORIES_FETCH_ERROR } from '../constants/action-types';

const doAddStories = (stories) => ({
	type: STORIES_ADD,
	stories
});

const doFetchStories = (query) => ({
	type: STORIES_FETCH,
	query
});

const doFetchErrorStories = (err) => ({
	type: STORIES_FETCH_ERROR,
	err
});

export {
	doAddStories,
	doFetchStories,
	doFetchErrorStories
};

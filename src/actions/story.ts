import { AxiosError } from 'axios';
import { STORIES_ADD, STORIES_FETCH, STORIES_FETCH_ERROR } from '../constants/action-types';
import { Hit } from '../models/search-result';

const doAddStories = (stories: Hit[]) => ({
	type: STORIES_ADD,
	stories
});

const doFetchStories = (query: string) => ({
	type: STORIES_FETCH,
	query
});

const doFetchErrorStories = (err: AxiosError) => ({
	type: STORIES_FETCH_ERROR,
	err
});

export {
	doAddStories,
	doFetchStories,
	doFetchErrorStories
};

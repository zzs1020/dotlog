import { AxiosError } from 'axios';
import { STORIES_ADD, STORIES_FETCH, STORIES_FETCH_ERROR } from '../constants/action-types';
import { IHit } from '../models/search-result';

export const doAddStories = (stories: IHit[]) => ({
	type: STORIES_ADD,
	payload: stories
});

export const doFetchStories = (query: string) => ({
	type: STORIES_FETCH,
	payload: query
});

export const doFetchErrorStories = (err: AxiosError) => ({
	type: STORIES_FETCH_ERROR,
	payload: err
});

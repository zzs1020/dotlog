import { AxiosError } from 'axios';
import { STORIES_ADD, STORIES_FETCH, HTTP_ERROR } from '../constants/action-types';
import { IHit } from '../models/search-result';

export const doAddStories = (hits: IHit[]) => {
	// some hits are because finding keys on comments/authors, which may don't have a story
	const stories = hits.filter(hit => hit.title);
	return {
		type: STORIES_ADD,
			payload: stories
	};
};

export const doFetchStories = (query: string) => ({
	type: STORIES_FETCH,
	payload: query
});

export const doFetchError = (err: AxiosError) => ({
	type: HTTP_ERROR,
	payload: err
});

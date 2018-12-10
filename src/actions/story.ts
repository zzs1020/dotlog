import { AxiosError } from 'axios';
import { STORIES_ADD, STORIES_FETCH, HTTP_ERROR } from '../constants/action-types';
import { IHit } from '../models/search-result';
import { IAction } from '../models/action';
import { ICurrentSearch } from '../models/search-state';

export const doAddStories = (hits: IHit[]) => {
	// some hits are because finding keys on comments/authors, which may don't have a story
	const stories = hits.filter(hit => hit.title && hit.url);
	return {
		type: STORIES_ADD,
		payload: stories
	};
};

export const doFetchStories = (query: string, page: number = 0): IAction<ICurrentSearch> => ({
	type: STORIES_FETCH,
	payload: {
		query,
		page
	}
});

export const doFetchError = (err: AxiosError) => ({
	type: HTTP_ERROR,
	payload: err
});

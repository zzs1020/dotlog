import uuid from 'uuid/v4';
import { AxiosError } from 'axios';
import { STORIES_ADD, STORIES_FETCH, ERROR_HTTP } from '../constants/action-types';
import { IHit } from '../models/search-result.model';
import { IAction } from '../models/action.model';
import { ICurrentSearch } from '../models/search-state.model';
import { IErr } from '../models/err.model';

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

export const doFetchError = (err: AxiosError, errFrom: string): IAction<IErr> => ({
	type: ERROR_HTTP,
	payload: {
		id: uuid(),
		type: errFrom,
		response: err
	}
});

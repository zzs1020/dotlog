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
		payload: addPageHead(stories)
	};
};

export const doFetchStories = (query: string, page: number = 1): IAction<ICurrentSearch> => ({
	type: STORIES_FETCH,
	payload: {
		query,
		page: page - 1
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

// everytime fetches a new page, add a flag to first element of this page, so i can monitor scroll status later
// here used IIFE since I need to record which page it is
const addPageHead = (() => {
	let counter = 1;
	return (hits: IHit[]) => {
		const head = Object.assign({pageHeadNumber: counter++}, hits[0]);
		return [head, ...hits.slice(1)];
	};
})();

import { TODO_SET_FILTER } from './../constants/action-types';

export const doSetFilter = (filter: string) => ({ type: TODO_SET_FILTER, payload: filter });

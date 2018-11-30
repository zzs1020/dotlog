import { TODO_SET_FILTER, TODO_TOGGLE } from './../constants/action-types';

export const doSetFilter = (filter: string) => ({ type: TODO_SET_FILTER, payload: filter });

export const doToggleTodo = (id: string) => ({type: TODO_TOGGLE, payload: id});

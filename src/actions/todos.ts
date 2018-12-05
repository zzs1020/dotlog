import { TODO_ADD, TODO_SET_FILTER, TODO_TOGGLE, TODO_SET_NAME, TODO_REMOVE } from '../constants/action-types';
import { IHit } from '../models/search-result';
import { ITodo } from '../models/todo';

export const doSetFilter = (filter: string) => ({type: TODO_SET_FILTER, payload: filter});

export const doToggleTodo = (id: string) => ({type: TODO_TOGGLE, payload: id});

export const doAddTodo = (story: IHit) => {
	return doTodo(story, TODO_ADD);
};

export const doRemoveTodo = (story: IHit) => {
	return doTodo(story, TODO_REMOVE);
};

export const doSaveTodoName = (id: string, name: string) => ({type: TODO_SET_NAME, payload: {id, name}});

const doTodo = (story: IHit, type: string) => {
	const todo: ITodo = {id: story.objectID, name: story.title, link: story.url};
	return {
		type,
		payload: todo
	};
};

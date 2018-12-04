import { TODO_ADD, TODO_SET_FILTER, TODO_TOGGLE, TODO_SET_NAME } from '../constants/action-types';
import { IHit } from '../models/search-result';
import { ITodo } from '../models/todo';

export const doSetFilter = (filter: string) => ({type: TODO_SET_FILTER, payload: filter});

export const doToggleTodo = (id: string) => ({type: TODO_TOGGLE, payload: id});

export const doAddTodo = (story: IHit) => {
	const todo: ITodo = {id: story.objectID, name: story.title, link: story.url};

	return {
		type: TODO_ADD,
		payload: todo
	};
};

export const doSaveTodoName = (id: string, name: string) => ({type: TODO_SET_NAME, payload: {id, name}});

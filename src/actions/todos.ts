import { TODO_ADD, TODO_SET_FILTER, TODO_TOGGLE } from '../constants/action-types';
import { IHit } from '../models/search-result';
import { ITodo } from '../models/todo';
import uuid from 'uuid/v4';

export const doSetFilter = (filter: string) => ({type: TODO_SET_FILTER, payload: filter});

export const doToggleTodo = (id: string) => ({type: TODO_TOGGLE, payload: id});

export const doAddTodo = (story: IHit) => {
	// todos should have its own id because user could click to create same todoitem, that will cause duplicated key
	// in turn affects notifications and more
	const todo: ITodo = {id: uuid(), name: story.title, link: story.url};

	return {
		type: TODO_ADD,
		payload: todo
	};
};

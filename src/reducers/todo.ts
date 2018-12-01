import { ITodo } from '../models/todo';
import { TODO_ADD, TODO_TOGGLE } from '../constants/action-types';
import produce from 'immer';

const INIT_STATE: ITodo[] = [
];

const todoReducer = (state: ITodo[] = INIT_STATE, action) => {
	switch (action.type) {
		case TODO_ADD:
			return applyAdd(state, action);
		case TODO_TOGGLE:
			return applyToggle(state, action);
		default:
			return state;
	}
};

const applyAdd = (base, action) => {
	return produce(base, draftState => {
		draftState.push(action.payload);
	});
};

const applyToggle = (baseState, action) => {
	return produce(baseState, draftState => {
		const toggleTodo = draftState.find(todo => todo.id === action.payload.id);
		toggleTodo.completed = !toggleTodo.completed;
	});
};

export default todoReducer;

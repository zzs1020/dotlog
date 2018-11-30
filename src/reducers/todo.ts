import { ITodo } from '../models/todo';
import { TODO_TOGGLE } from '../constants/action-types';
import produce from 'immer';

const INIT_STATE: ITodo[] = [
	{id: '1', name: 'ssdf'},
	{id: '2', name: 'skkdf'},
	{id: '3', name: 'sgf'},
	{id: '4', name: 'sadf'}
];

const todoReducer = (state: ITodo[] = INIT_STATE, action) => {
	switch (action.type) {
		case TODO_TOGGLE:
			return applyToggle(state, action);
		default:
			return state;
	}
};

const applyToggle = (baseState, action) => {
	return produce(baseState, draftState => {
		const toggleTodo = draftState.find(todo => todo.id === action.payload.id);
		toggleTodo.completed = !toggleTodo.completed;
	});
};

export default todoReducer;

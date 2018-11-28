import { ITodo } from '../models/todo';

const INIT_STATE: ITodo[] = [
	{id: '1', name: 'ssdf'},
	{id: '2', name: 'skkdf'},
	{id: '3', name: 'sgf'},
	{id: '4', name: 'sadf'}
];

const todoReducer = (state: ITodo[] = INIT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default todoReducer;

import { IStoreState } from '../models/store-state';
import { ITodo } from '../models/todo';

const getTodos = ({todoState}: IStoreState): ITodo[] => (todoState);

export {
	getTodos
};

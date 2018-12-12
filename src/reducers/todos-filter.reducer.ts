import { TODO_SET_FILTER, TODO_SHOW_INCOMPLETE } from './../constants/action-types';
import { IAction } from '../models/action.model';

// currently only have to state incomplete or completed
const TodosFilterReducer = (state: string = TODO_SHOW_INCOMPLETE, action: IAction<string>) => {
	switch (action.type) {
		case TODO_SET_FILTER:
			return action.payload;
		default:
			return state;
	}
};

export default TodosFilterReducer;

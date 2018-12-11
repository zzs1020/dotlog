import { ERROR_HTTP, ERROR_CLEAN } from './../constants/action-types';
import { IAction } from '../models/action';
import { IErr } from '../models/err';

const errReducer = (state: IErr[] = [], action) => {
	switch (action.type) {
		case ERROR_HTTP:
			return applyHttpError(state, action);
		case ERROR_CLEAN:
			return applyCleanError(state, action);
		default:
			return state;
	}
};

const applyHttpError = (state, action: IAction<IErr>) => {
	return [...state, action.payload];
};

// if don't specify id then clear all errs
const applyCleanError = (state, action: IAction<string>) => {
	if (action.payload) {
		return state.filter(err => err.id !== action.payload);
	} else {
		return [];
	}
};

export default errReducer;

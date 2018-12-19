import { LOADER_ADD, LOADER_REMOVE } from '../constants/action-types';
import { ISingleLoader } from '../models/single-loader.model';
import { IAction } from '../models/action.model';

const loaderReducer = (state = [], action) => {
	switch (action.type) {
		case LOADER_ADD:
			return applyAddLoader(state, action);
		case LOADER_REMOVE:
			return applyRemoveLoader(state, action);
		default:
			return state;
	}
};

const applyAddLoader = (state: ISingleLoader[], action: IAction<ISingleLoader>) => {
	return [...state, action.payload];
};

const applyRemoveLoader = (state: ISingleLoader[], action: IAction<string>) => {
	const firstOccurrence = state.find(loader => loader.insertedElementId === action.payload);
	return state.filter(loader => loader.id !== firstOccurrence.id);
};

export default loaderReducer;

import { LOADER_ADD } from '../constants/action-types';

const loaderReducer = (state = [], action) => {
	switch (action.type) {
		case LOADER_ADD:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default loaderReducer;

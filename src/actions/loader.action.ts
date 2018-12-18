import uuid from 'uuid/v4';
import { LOADER_ADD, LOADER_REMOVE } from '../constants/action-types';
import { IAction } from '../models/action.model';
import { ISingleLoader } from '../models/single-loader.model';

export const doAddLoader = (insertTo: string): IAction<ISingleLoader> => {
	return {
		type: LOADER_ADD,
		payload: {
			id: uuid(),
			insertedElementId: insertTo
		}
	};
};

export const doRemoveLoader = (insertedElementId: string): IAction<string> =>  ({type: LOADER_REMOVE, payload: insertedElementId});

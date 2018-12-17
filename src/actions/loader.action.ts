import uuid from 'uuid/v4';
import { LOADER_ADD } from '../constants/action-types';
import { IAction } from '../models/action.model';
import { ISingleLoader } from '../models/single-loader.model';

export const doAddLoader = (insertTo: string): IAction<ISingleLoader> => {
	return {
		type: LOADER_ADD,
		payload: {
			// html id can't starts from number
			id: 'i' + uuid().substring(1),
			insertedElementId: insertTo
		}
	};
};

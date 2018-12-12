import { NOTIFICATION_ERROR, NOTIFICATION_HIDE } from '../constants/action-types';
import uuid from 'uuid/v4';

export const doHideNotification = (id: string) => ({type: NOTIFICATION_HIDE, payload: id});

export const doShowError = (msg: string, title?: string) => (
	{
		type: NOTIFICATION_ERROR,
		payload: {
			id: uuid(), // must put here otherwise saga can't find its id
			msg,
			title
		}
	}
);

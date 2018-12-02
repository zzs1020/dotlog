import { NOTIFICATION_HIDE, TODO_ADD } from '../constants/action-types';
import { INotification } from '../models/notification';
import { IAction } from '../models/action';
import { ITodo } from '../models/todo';
import { MsgType } from '../constants/msg-type.enum';

const notificationReducer = (state: INotification[] = [], action: IAction<ITodo | string>) => {
	switch (action.type) {
		case TODO_ADD:
			return applySetNotification(state, <IAction<ITodo>>action);
		case NOTIFICATION_HIDE:
			return applyHideNotification(state, <IAction<string>>action);
		default:
			return state;
	}
};

const applyHideNotification = (state, action: IAction<string>) => {
	return state.filter(note => note.id !== action.payload);
};

const applySetNotification = (state, action: IAction<ITodo>) => {
	let title = '';
	if (action.type === TODO_ADD) {
		title = 'New Reading Created:';
	}
	const note: INotification = {
		title,
		type: MsgType.SUCCESS,
		id: action.payload.id,
		msg: action.payload.name
	};
	return [...state, note];
};

export default notificationReducer;

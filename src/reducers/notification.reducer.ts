import { NOTIFICATION_ERROR, NOTIFICATION_HIDE, TODO_ADD } from '../constants/action-types';
import { INotification } from '../models/notification.model';
import { IAction } from '../models/action.model';
import { ITodo } from '../models/todo.model';
import { MsgType } from '../constants/msg-type.enum';

const notificationReducer = (state: INotification[] = [], action: IAction<ITodo | INotification | string>) => {
	switch (action.type) {
		case TODO_ADD:
			return applyShowTodoCreated(state, <IAction<ITodo>>action);
		case NOTIFICATION_ERROR:
			return applyShowError(state, <IAction<INotification>>action);
		case NOTIFICATION_HIDE:
			return applyHideNotification(state, <IAction<string>>action);
		default:
			return state;
	}
};

const applyShowTodoCreated = (state, action: IAction<ITodo>) => {
	const notificationAction = {
		payload: {
			id: action.payload.id,
			title: 'New Reading Created',
			msg: action.payload.name
		}
	};
	return applyShowNotification(state, notificationAction, MsgType.SUCCESS);
};

const applyShowError = (state, action: IAction<INotification>) => {
	return applyShowNotification(state, action, MsgType.DANGER);
};

// each action before reaching this method is probably converted from other actions, so this action definition can be partial
const applyShowNotification = (state: INotification[], action: Partial<IAction<Partial<INotification>>>, type: MsgType) => {
	const newNotification = {
		id: action.payload.id,
		type: type || MsgType.DANGER,
		title: action.payload.title,
		msg: action.payload.msg
	};
	return [...state, newNotification];
};

const applyHideNotification = (state, action: IAction<string>) => {
	return state.filter(note => note.id !== action.payload);
};

export default notificationReducer;

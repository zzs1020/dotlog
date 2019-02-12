import { IAction } from '../models/action.model';
import { INotification } from '../models/notification.model';
import { put, delay } from 'redux-saga/effects';
import { doHideNotification } from '../actions/notification.action';

export function* handleNotification(action: IAction<INotification>) {
	yield delay(5000);
	yield put(doHideNotification(action.payload.id));
}

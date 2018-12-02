import { IAction } from '../models/action';
import { INotification } from '../models/notification';
import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { doHideNotification } from '../actions/notification';

export function* handleNotification(action: IAction<INotification>) {
	yield delay(5000);
	yield put(doHideNotification(action.payload.id));
}

import { IAction } from '../models/action';
import { ITodo } from '../models/todo';
import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { doHideNotification } from '../actions/notification';

export function* handleAddTodo(action: IAction<ITodo>) {
	yield delay(5000);
	yield put(doHideNotification(action.payload.id));
}

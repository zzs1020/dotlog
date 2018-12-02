import { NOTIFICATION_HIDE } from '../constants/action-types';

export const doHideNotification = (id: string) => ({type: NOTIFICATION_HIDE, payload: id});

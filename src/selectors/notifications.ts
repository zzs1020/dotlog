import { IStoreState } from '../models/store-state';

export const getNotifications = (state: IStoreState) => state.notificationState;

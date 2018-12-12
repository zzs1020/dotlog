import { IStoreState } from '../models/store-state.model';

export const getNotifications = (state: IStoreState) => state.notificationState;

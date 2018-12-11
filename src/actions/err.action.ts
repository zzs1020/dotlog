import { ERROR_CLEAN } from '../constants/action-types';

export const doCleanError = (id?: string) => ({type: ERROR_CLEAN, payload: id});

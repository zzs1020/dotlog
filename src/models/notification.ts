import { MsgType } from '../constants/msg-type.enum';

export interface INotification {
	id: string;
	title: string;
	msg: string;
	type: MsgType;
}

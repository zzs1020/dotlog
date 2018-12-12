import { EPriority } from '../constants/priority.enum';

export interface ITodo {
	id: string;
	name: string;
	link?: string;
	completed?: boolean;
	priority?: EPriority;
	remindOn?: Date;
	repeatInterval?: number; // days
}

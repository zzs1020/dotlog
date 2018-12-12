import { AxiosError } from 'axios';
export interface IErr {
	id: string;
	type: string;
	name?: string;
	msg?: string;
	response?: AxiosError;
}

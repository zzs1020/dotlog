import { AxiosError } from 'axios';
import { IHit } from './search-result';

export interface IStoryState {
	stories: IHit[];
	err: AxiosError;
}

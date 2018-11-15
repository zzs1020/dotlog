import { AxiosError } from 'axios';
import { Hit } from './search-result';

export interface StoryState {
	stories: Hit[];
	err: AxiosError;
}

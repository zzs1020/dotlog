import { IStoryState } from './story-state';
import { ITodo } from './todo';

export interface IStoreState {
	storyState: IStoryState;
	archiveState: string[];
	todoState: ITodo[];
}

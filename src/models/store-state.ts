import { IStoryState } from './story-state';
import { ITodo } from './todo';
import { INotification } from './notification';

export interface IStoreState {
	storyState: IStoryState;
	archiveState: string[];
	todoState: ITodo[];
	todosFilterState: string;
	notificationState: INotification[];
}

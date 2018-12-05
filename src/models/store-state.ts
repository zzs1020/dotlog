import { ITodo } from './todo';
import { INotification } from './notification';
import { IHit } from './search-result';

export interface IStoreState {
	storyState: IHit[];
	archiveState: string[];
	todoState: ITodo[];
	todosFilterState: string;
	notificationState: INotification[];
}

import { ITodo } from './todo';
import { INotification } from './notification';
import { IHit } from './search-result';
import { ISearchState } from './search-state';

export interface IStoreState {
	storyState: IHit[];
	searchState: ISearchState;
	archiveState: string[];
	todoState: ITodo[];
	todosFilterState: string;
	notificationState: INotification[];
}

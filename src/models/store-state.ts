import { ITodo } from './todo';
import { INotification } from './notification';
import { IHit } from './search-result';
import { ISearchState } from './search-state';
import { IErr } from './err';

export interface IStoreState {
	storyState: IHit[];
	searchState: ISearchState;
	archiveState: string[];
	todoState: ITodo[];
	todosFilterState: string;
	notificationState: INotification[];
	errState: IErr[];
}

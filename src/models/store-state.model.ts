import { ITodo } from './todo.model';
import { INotification } from './notification.model';
import { IHit } from './search-result.model';
import { ISearchState } from './search-state.model';
import { IErr } from './err.model';

export interface IStoreState {
	storyState: IHit[];
	searchState: ISearchState;
	archiveState: string[];
	todoState: ITodo[];
	todosFilterState: string;
	notificationState: INotification[];
	errState: IErr[];
}

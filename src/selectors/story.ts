import { AxiosError } from 'axios';
import { Hit } from '../models/search-result';
import { StoreState } from '../models/store-state';

const isNotArchived = (archivedIds: string[]) => (
	(story) => (
		!archivedIds.includes(story.objectID)
	)
);

const getReadableStories = ({storyState, archiveState}: StoreState): Hit[] => (
	storyState.stories.filter(isNotArchived(archiveState))
);

const getFetchError = ({storyState}: StoreState): AxiosError => (
	storyState.err
);

export {
	getReadableStories,
	getFetchError
};

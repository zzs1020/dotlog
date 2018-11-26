import { StoryState } from './../models/story-state';
import { StoreState } from './../models/store-state';
import { AxiosError } from 'axios';
import { Hit } from '../models/search-result';

const getReadableStories = ({ storyState, archiveState }: StoreState): Hit[] => (
	storyState.stories.filter((story: Hit) => !archiveState.includes(story.objectID))
);

const getArchivedStories = ({ storyState, archiveState }: StoreState): Hit[] => (
	storyState.stories.filter((story: Hit) => archiveState.includes(story.objectID))
);

const getStories = ({ storyState }: StoreState): Hit[] => (
	storyState.stories
);

const getFetchError = ({ storyState }: StoreState): AxiosError => (
	storyState.err
);

export {
	getStories,
	getReadableStories,
	getArchivedStories,
	getFetchError
};

import { IStoryState } from './../models/story-state';
import { IStoreState } from './../models/store-state';
import { AxiosError } from 'axios';
import { IHit } from '../models/search-result';

const getReadableStories = ({ storyState, archiveState }: IStoreState): IHit[] => (
	storyState.stories.filter((story: IHit) => !archiveState.includes(story.objectID))
);

const getArchivedStories = ({ storyState, archiveState }: IStoreState): IHit[] => (
	storyState.stories.filter((story: IHit) => archiveState.includes(story.objectID))
);

const getStories = ({ storyState }: IStoreState): IHit[] => (
	storyState.stories
);

const getFetchError = ({ storyState }: IStoreState): AxiosError => (
	storyState.err
);

export {
	getStories,
	getReadableStories,
	getArchivedStories,
	getFetchError
};

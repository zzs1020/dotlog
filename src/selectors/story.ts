import { IStoryState } from './../models/story-state';
import { IStoreState } from './../models/store-state';
import { AxiosError } from 'axios';
import { IHit } from '../models/search-result';

export const getReadableStories = ({ storyState, archiveState }: IStoreState): IHit[] => (
	storyState.stories.filter((story: IHit) => !archiveState.includes(story.objectID))
);

export const getArchivedStories = ({ storyState, archiveState }: IStoreState): IHit[] => (
	storyState.stories.filter((story: IHit) => archiveState.includes(story.objectID))
);

export const getStories = ({ storyState }: IStoreState): IHit[] => (
	storyState.stories
);

export const getFetchError = ({ storyState }: IStoreState): AxiosError => (
	storyState.err
);

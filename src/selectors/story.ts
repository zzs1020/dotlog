import { IStoreState } from '../models/store-state';
import { IHit } from '../models/search-result';

export const getReadableStories = ({ storyState, archiveState }: IStoreState): IHit[] => (
	storyState.filter((story: IHit) => !archiveState.includes(story.objectID))
);

export const getArchivedStories = ({ storyState, archiveState }: IStoreState): IHit[] => (
	storyState.filter((story: IHit) => archiveState.includes(story.objectID))
);

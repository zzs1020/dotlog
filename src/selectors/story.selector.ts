import { IStoreState } from '../models/store-state.model';
import { IHit } from '../models/search-result.model';

export const getReadableStories = ({ storyState, archiveState }: IStoreState): IHit[] => (
	storyState.filter((story: IHit) => !archiveState.includes(story.objectID))
);

export const getArchivedStories = ({ storyState, archiveState }: IStoreState): IHit[] => (
	storyState.filter((story: IHit) => archiveState.includes(story.objectID))
);

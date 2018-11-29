import { STORY_ARCHIVE } from '../constants/action-types';

export const doArchiveStory = (id: string) => ({
	type: STORY_ARCHIVE,
	payload: id
});

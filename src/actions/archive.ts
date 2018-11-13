import { STORY_ARCHIVE } from '../constants/actionTypes';

const doArchiveStory = (id: string) => ({
	type: STORY_ARCHIVE,
	id
});

export {doArchiveStory};

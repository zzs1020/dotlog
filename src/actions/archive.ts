import { STORY_ARCHIVE } from '../constants/action-types';

const doArchiveStory = (id: string) => ({
	type: STORY_ARCHIVE,
	id
});

export {doArchiveStory};

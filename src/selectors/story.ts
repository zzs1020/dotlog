const isNotArchived = (archivedIds: string[]) => (
	(story) => (
		!archivedIds.includes(story.objectID)
	)
);

const getReadableStories = ({ storyState, archiveState }) => (
	storyState.stories.filter(isNotArchived(archiveState))
);

const getFetchError = ({ storyState }) => (
	storyState.err
);

export {
	getReadableStories,
	getFetchError
};

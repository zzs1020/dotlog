const isNotArchived = archivedIds => story => !archivedIds.includes(story.objectID);
const getReadableStories = ({storyState, archiveState}) => storyState.filter(isNotArchived(archiveState));

export {getReadableStories};
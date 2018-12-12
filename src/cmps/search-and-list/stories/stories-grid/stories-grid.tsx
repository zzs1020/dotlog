import React from 'react';
import './stories-grid.scss';
import { IHit } from '../../../../models/search-result.model';
import Story from './story/story';

const StoriesGrid = ({ stories }: {stories: IHit[]}) => (
	<>
		{(stories || []).map((story: IHit) =>
			<Story key={story.objectID} story={story} />
		)}
	</>
);

export default StoriesGrid;

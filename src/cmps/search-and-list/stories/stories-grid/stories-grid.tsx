import React from 'react';
import './stories-grid.scss';
import { IHit } from '../../../../models/search-result.model';
import Story from './story/story';

const StoriesGrid = ({ stories }: {stories: IHit[]}) => (
	<div id="storiesGrid">
		{(stories || []).map((story: IHit) =>
			<Story key={story.objectID} story={story} />
		)}
	</div>
);

export default StoriesGrid;

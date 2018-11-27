import React from 'react';
import './stories-grid.scss';
import { Hit } from '../../../../models/search-result';
import Story from './story/story';

const COLUMNS = {
	title: 'col-5',
	author: 'col-3',
	comments: 'col-1',
	points: 'col-1',
	archive: 'col-2'
};

const StoriesGrid = ({ stories }: {stories: Hit[]}) => (
	<>
		<div className="row titles">
			{Object.keys(COLUMNS).map((key: string) =>
				<div key={key} className={COLUMNS[key]}>
					{key}
				</div>
			)}
		</div>
		{(stories || []).map((story: Hit) =>
			<Story key={story.objectID} story={story} cols={COLUMNS} />
		)}
	</>
);

export default StoriesGrid;

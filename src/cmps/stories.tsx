import React from 'react';
import './stories.scss';
import Story from './story';
import { connect } from 'react-redux';
import { getFetchError, getReadableStories } from '../selectors/story';
import { Hit } from '../models/search-result';
import { AxiosError } from 'axios';
import { StoreState } from '../models/store-state';

const COLUMNS = {
	title: 'col-5',
	author: 'col-3',
	comments: 'col-1',
	points: 'col-1',
	archive: 'col-2'
};

const Stories = ({stories, err}: { stories: Hit[], err: AxiosError }) =>
	<div>
		<div className="row titles">
			{Object.keys(COLUMNS).map(key =>
				<div key={key} className={COLUMNS[key]}>
					{key}
				</div>
			)}
		</div>
		{err && <p className="error">Api call failed</p>}
		{(stories || []).map((story: Hit) =>
			<Story key={story.objectID} story={story} cols={COLUMNS} />
		)}
	</div>;


const mapStateToProps = (state: StoreState) => ({
	stories: getReadableStories(state),
	err: getFetchError(state)
});

export default connect(
	mapStateToProps
)(Stories);

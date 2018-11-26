import React from 'react';
import './story.scss';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { Hit } from '../models/search-result';

const Story = ({story, cols, onArchive}: {story: Hit, cols: any, onArchive: (id) => void}) => {
	const {title, url, author, num_comments, points, objectID} = story;

	return (
		<div className="row my-1">
            <div className={cols.title}>
                <a href={url}>{title}</a>
            </div>
			<div className={cols.author}>
                {author}
            </div>
			<div className={cols.comments}>
                {num_comments}
            </div>
			<div className={cols.points}>
                {points}
            </div>
			<div className={cols.archive}>
				<button type="button" className="btn btn-outline-danger" onClick={() => onArchive(objectID)}> Archive </button>
			</div>
		</div>
	)
};

const mapDispatchToProps = dispatch => ({
	onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(
	null,
	mapDispatchToProps
)(Story);

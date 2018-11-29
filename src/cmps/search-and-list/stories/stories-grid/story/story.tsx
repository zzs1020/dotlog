import React from 'react';
import './story.scss';
import { connect } from 'react-redux';
import Button from '../../../../shared/button/button';
import { IHit } from '../../../../../models/search-result';
import { doArchiveStory } from '../../../../../actions/archive';

type Props = {
	story: IHit,
	cols: any,
	onArchive: (id: string) => void
};

const Story = ({ story, cols, onArchive }: Props) => {
	const { title, url, author, num_comments, points, objectID } = story;

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
				<Button cls="outline-danger" onClick={() => onArchive(objectID)}>Archive</Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	onArchive: (id: string) => dispatch(doArchiveStory(id))
});

export default connect(
	null,
	mapDispatchToProps
)(Story);

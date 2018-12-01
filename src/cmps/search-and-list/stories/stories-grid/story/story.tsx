import React from 'react';
import './story.scss';
import { connect } from 'react-redux';
import Button from '../../../../shared/button/button';
import { IHit } from '../../../../../models/search-result';
import { doArchiveStory } from '../../../../../actions/archive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { doAddTodo } from '../../../../../actions/todos';

type Props = {
	story: IHit,
	cols: any,
	onArchive: (id: string) => void,
	onAddTodo: (todo: IHit) => void
};

const Story = ({ story, cols, onArchive, onAddTodo }: Props) => {
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
			<div className={cols.functions}>
				<Button cls="link" onClick={() => onArchive(objectID)}><FontAwesomeIcon icon="archive" title="Archive"/></Button>
				<Button cls="link" onClick={() => onAddTodo(story)}><FontAwesomeIcon icon={['fas', 'plus']} title="Add to Reading List"/></Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	onArchive: (id: string) => dispatch(doArchiveStory(id)),
	onAddTodo: (story: IHit) => dispatch(doAddTodo(story))
});

export default connect(
	null,
	mapDispatchToProps
)(Story);

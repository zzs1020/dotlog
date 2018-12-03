import React from 'react';
import './story.scss';
import { connect } from 'react-redux';
import Button from '../../../../shared/button/button';
import { IHit } from '../../../../../models/search-result';
import { doArchiveStory } from '../../../../../actions/archive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { doAddTodo } from '../../../../../actions/todos';
import { IStoreState } from '../../../../../models/store-state';
import { getTodos } from '../../../../../selectors/todos';
import { ITodo } from '../../../../../models/todo';
import { doShowError } from '../../../../../actions/notification';

type Props = {
	story: IHit,
	cols: any,
	todos: ITodo[],
	onArchive: (id: string) => void,
	onAddTodo: (story: IHit, todos: ITodo[]) => void
};

const Story = ({ story, cols, todos, onArchive, onAddTodo }: Props) => {
	const { title, url, author, num_comments, points, objectID } = story;

	return (
		<div className="row my-1">
			<div className={cols.title}>
				<a target="_blank" href={url}>{title}</a>
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
				<Button cls="link" onClick={() => onAddTodo(story, todos)}>
					<FontAwesomeIcon icon={['fas', 'plus']} title="Add to Reading List"/>
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => ({
	todos: getTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
	onArchive: (id: string) => dispatch(doArchiveStory(id)),
	onAddTodo: (story, todos) => {
		if (todos.some(todo => todo.id === story.objectID)) {
			dispatch(doShowError('Todo already existed', 'Duplicated'));
		} else {
			dispatch(doAddTodo(story));
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Story);

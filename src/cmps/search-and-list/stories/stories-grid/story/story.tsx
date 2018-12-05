import React from 'react';
import './story.scss';
import { connect } from 'react-redux';
import Button from '../../../../shared/button/button';
import { IHit } from '../../../../../models/search-result';
import { doArchiveStory } from '../../../../../actions/archive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { doAddTodo, doRemoveTodo } from '../../../../../actions/todos';
import { IStoreState } from '../../../../../models/store-state';
import { getTodos } from '../../../../../selectors/todos';
import { ITodo } from '../../../../../models/todo';

type Props = {
	story: IHit,
	todos: ITodo[],
	onArchive: (id: string) => void,
	onBookmark: (story: IHit, todos: ITodo[]) => void
};

const Story = ({ story, todos, onArchive, onBookmark }: Props) => {
	const { title, url, author, num_comments, created_at, objectID } = story;

	return (
		<div className="row my-1">
			<div className="col-10">
				<a target="_blank" href={url} title={url}>{title}</a>
				<div className="row text-muted">
					<div className="col-auto">
						{new Date(created_at).toDateString()}
					</div>
					<div className="col-auto border-left border-right">
						{num_comments} comments
					</div>
					<div className="col-auto">
						{author}
					</div>
				</div>
			</div>
			<div className="col">
				<Button cls="link" onClick={() => onArchive(objectID)}><FontAwesomeIcon icon="archive" title="Archive" /></Button>
				<Button cls="link" onClick={() => onBookmark(story, todos)}>
					<FontAwesomeIcon icon={[isTodoExist(story, todos) ? 'fas' : 'far', 'bookmark']} title="Add to Reading List" />
				</Button>
			</div>
		</div>
	);
};

const isTodoExist = (story, todos): boolean => {
	return todos.some(todo => todo.id === story.objectID);
};

const mapStateToProps = (state: IStoreState) => ({
	todos: getTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
	onArchive: (id: string) => dispatch(doArchiveStory(id)),
	onBookmark: (story, todos) => {
		if (isTodoExist(story, todos)) {
			dispatch(doRemoveTodo(story));
		} else {
			dispatch(doAddTodo(story));
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Story);

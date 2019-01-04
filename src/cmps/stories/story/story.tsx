import React from 'react';
import './story.scss';
import { connect } from 'react-redux';
import { IHit } from '../../../models/search-result.model';
import { ITodo } from '../../../models/todo.model';
import { PAGE_HEAD } from '../../../constants/often-used-string';
import Button from '../../shared/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IStoreState } from '../../../models/store-state.model';
import { getTodos } from '../../../selectors/todos.selector';
import { doRemoveTodo, doAddTodo } from '../../../actions/todo.action';

type Props = {
	story: IHit,
	todos: ITodo[],
	onBookmark: (story: IHit, todos: ITodo[]) => void
};

const Story = ({ story, todos, onBookmark }: Props) => {
	const { title, url, author, num_comments, created_at, pageHeadNumber } = story;

	return (
		<div className={`row my-1`} id={pageHeadNumber ? PAGE_HEAD + pageHeadNumber : ''}>
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
				<Button btnType="link" onClick={() => onBookmark(story, todos)}>
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

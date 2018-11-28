import React from 'react';
import Todo from './todo/todo';
import './todos.scss';
import { ITodo } from '../../models/todo';
import Button from '../shared/button/button';
import { connect } from 'react-redux';
import { IStoreState } from '../../models/store-state';
import { getTodos } from '../../selectors/todos';

type Props = {
	todos: ITodo[]
}

const Todos = ({todos}: Props) => {
	return (
		<div className="todo-container border border-dark">
			<h4>Read Later</h4>
			{
				todos.map(todo => <Todo key={todo.id} item={todo} />)
			}
			<Button>Show Completed</Button>
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => ({
	todos: getTodos(state)
});

export default connect(
	mapStateToProps
)(Todos);

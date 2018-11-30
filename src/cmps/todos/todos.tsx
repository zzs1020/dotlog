import React from 'react';
import Todo from './todo/todo';
import './todos.scss';
import { ITodo } from '../../models/todo';
import { connect } from 'react-redux';
import { IStoreState } from '../../models/store-state';
import { getTodos } from '../../selectors/todos';
import TodosFilter from './filter/todos-filter';

type Props = {
	todos: ITodo[]
};

const Todos = ({todos}: Props) => {
	return (
		<div className="todo-container border border-dark">
			<h4>Read Later</h4>
			{
				todos.map(todo => <Todo key={todo.id} item={todo} />)
			}
			<div className="todo-footer">
				<TodosFilter />
			</div>
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => ({
	todos: getTodos(state)
});

export default connect(
	mapStateToProps
)(Todos);

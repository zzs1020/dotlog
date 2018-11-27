import React from 'react';
import Todo from './todo/todo';
import './todos.scss';

const Todos = () => {
	return (
		<div className="todo-container border border-dark">
			<h4>Read Later</h4>
			<Todo />
		</div>
	);
};

export default Todos;

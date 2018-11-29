import React from 'react';
import './todo.scss';
import { ITodo } from '../../../models/todo';

type Props = {
	item: ITodo
};

const Todo = ({item}: Props) => {
	return (
		<div className="row border border-info">
			<div className="col-1">
				<input type="checkbox" />
			</div>
			<div className="col-11">
				<a href={item.link}>{item.name}</a>
			</div>
		</div>
	);
};

export default Todo;

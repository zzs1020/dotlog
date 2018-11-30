import React from 'react';
import './todo.scss';
import { ITodo } from '../../../models/todo';

type Props = {
	item: ITodo
};

const Todo = ({item}: Props) => {
	return (
		<div className="container-fluid border border-info">
			<div className="row">
				<div className="col-2">
					<input type="checkbox" />
				</div>
				<div className="col">
					<a href={item.link}>{item.name}</a>
				</div>
			</div>
		</div>
	);
};

export default Todo;

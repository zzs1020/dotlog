import React from 'react';
import './todo.scss';
import { ITodo } from '../../../models/todo';
import { Dispatch } from 'redux';
import { doToggleTodo } from '../../../actions/todos';
import { connect } from 'react-redux';

type Props = {
	item: ITodo,
	onToggle: (item: ITodo) => Dispatch
};

const Todo = ({item, onToggle}: Props) => {
	return (
		<div className="container-fluid border border-info">
			<div className="row">
				<div className="col-2">
					<input type="checkbox" checked={item.completed} onChange={() => onToggle(item)} />
				</div>
				<div className="col">
					<a href={item.link}>{item.name}</a>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onToggle: item => dispatch(doToggleTodo(item))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Todo);

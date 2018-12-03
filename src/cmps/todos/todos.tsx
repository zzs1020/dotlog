import React from 'react';
import Todo from './todo/todo';
import './todos.scss';
import { ITodo } from '../../models/todo';
import { connect } from 'react-redux';
import { IStoreState } from '../../models/store-state';
import { getTodos } from '../../selectors/todos';
import TodosFilter from './filter/todos-filter';
import { Spring } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
	todos: ITodo[]
};

type State = {
	offset: string
};

class Todos extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			offset: '-200px' // set open's offset, -200 to 0
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => {
			const offset = prevState.offset === '0px' ? '-200px' : '0px';
			return {offset};
		});
	}

	render() {
		const {todos} = this.props;
		const {offset} = this.state;
		return (
			<Spring to={{left: offset}}>
				{props =>
					<div style={props} className="todo-container border border-dark">
						<div className="opener" title="Open Reading List" onClick={this.toggle}>
							{/*show green only when user has incomplete todos*/}
							<FontAwesomeIcon icon={['fas', 'angle-double-right']} rotation={offset === '0px' ? 180 : null}
							                 color={todos.length > 0 && !todos[0].completed ? 'lawngreen' : 'black'}/>
						</div>
						<h4>Reading List</h4>
						{
							todos.map(todo => <Todo key={todo.id} item={todo} />)
						}
						<div className="todo-footer">
							<TodosFilter />
						</div>
					</div>}
			</Spring>
		);
	}
}

const mapStateToProps = (state: IStoreState) => ({
	todos: getTodos(state)
});

export default connect(
	mapStateToProps
)(Todos);

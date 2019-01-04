import React, { Component, RefObject } from 'react';
import Todo from './todo/todo';
import './todos.scss';
import { ITodo } from '../../models/todo.model';
import { connect } from 'react-redux';
import { IStoreState } from '../../models/store-state.model';
import { getTodos } from '../../selectors/todos.selector';
import TodosFilter from './filter/todos-filter';
import { Spring } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dragula from 'react-dragula';
import 'dragula/dist/dragula.min.css';
import withClickOutside from '../shared/with-click-outside/with-click-outside';

type Props = {
	todos: ITodo[],
	domRef: RefObject<HTMLDivElement>
	addClickListener: () => void,
	removeClickListener: () => void
};

type State = {
	offset: string
};

class Todos extends Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			offset: '-30%' // set open's offset, - to 0
		};

		this.toggle = this.toggle.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	dragulaDecorator(componentBackingInstance) {
		if (componentBackingInstance) {
			const options = {};
			Dragula([componentBackingInstance], options);
		}
	}

	// withClickOutside hooks, child cmp have to implement it's logic itself
	handleClickOutside() {
		this.toggle();
	}

	toggle() {
		this.setState(prevState => {
			let offset;
			if (prevState.offset === '-30%') {
				offset = '0px';
				this.props.addClickListener();
			} else {
				offset = '-30%';
				this.props.removeClickListener();
			}
			return {offset};
		});
	}

	render() {
		const {todos, domRef} = this.props;
		const {offset} = this.state;
		return (
			<Spring to={{left: offset}}>
				{props =>
					<div ref={domRef} style={props} className="reading-list border border-dark">
						<div className="opener" title="Open Reading List" onClick={this.toggle}>
							{/*show green only when user has incomplete todos*/}
							<FontAwesomeIcon icon={['fas', 'angle-double-right']} rotation={offset === '0px' ? 180 : null}
							                 color={todos.length > 0 && !todos[0].completed ? 'lawngreen' : 'black'} />
						</div>

						<h4>Reading List ({todos.length} stories)</h4>
						<div className="todos-container" ref={this.dragulaDecorator}>
							{
								todos.map(todo => <Todo key={todo.id} item={todo} />)
							}
						</div>
						<div className="todos-footer">
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
)(withClickOutside(Todos));

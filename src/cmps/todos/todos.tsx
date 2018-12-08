import React, { Component, RefObject } from 'react';
import Todo from './todo/todo';
import './todos.scss';
import { ITodo } from '../../models/todo';
import { connect } from 'react-redux';
import { IStoreState } from '../../models/store-state';
import { getTodos } from '../../selectors/todos';
import TodosFilter from './filter/todos-filter';
import { Spring } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dragula from 'react-dragula';

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
					<div ref={domRef} style={props} className="todo-container border border-dark">
						<div className="opener" title="Open Reading List" onClick={this.toggle}>
							{/*show green only when user has incomplete todos*/}
							<FontAwesomeIcon icon={['fas', 'angle-double-right']} rotation={offset === '0px' ? 180 : null}
							                 color={todos.length > 0 && !todos[0].completed ? 'lawngreen' : 'black'} />
						</div>

						<h4>Reading List ({todos.length} stories)</h4>
						<div ref={this.dragulaDecorator}>
							{
								todos.map(todo => <Todo key={todo.id} item={todo} />)
							}
						</div>
						<div className="todo-footer">
							<TodosFilter />
						</div>
					</div>}
			</Spring>
		);
	}
}

/**
 * a HOC used to detect if user clicked out side of designated area
 * Usage:
 *        this will give child component 2 methods to directly use,
 *        but user must tell where is start node by using domRef prop, also need to implement handleClickOutside logic
 */
const withClickOutside = (ChildComponent) => {
	return class WithClickOutside extends Component {
		childComponent: RefObject<Component>; // refer to component instance in case to call its method
		startNode: RefObject<HTMLDivElement>; // refer to component's top DOM HTML element, from where to decide if it's outside or not

		constructor(props) {
			super(props);
			this.childComponent = React.createRef();
			this.startNode = React.createRef();

			// if don't bind this, then when child component run the method, this.handleGlobalClick will be refer to undefined
			this.addListener = this.addListener.bind(this);
			this.removeListener = this.removeListener.bind(this);
			this.handleGlobalClick = this.handleGlobalClick.bind(this);
		}

		// use this method to start listening
		addListener() {
			document.addEventListener('click', this.handleGlobalClick, false);
		}

		// remove it when you don't use it to prevent memory leak
		removeListener() {
			document.removeEventListener('click', this.handleGlobalClick, false);
		}

		handleGlobalClick(e: MouseEvent) {
			// clicked part is not descendant of this component, close
			if (!this.startNode.current.contains(e.target as Node)) {
				// @ts-ignore child component must implement its own logic
				this.childComponent.current.handleClickOutside();
			}
		}

		render() {
			return <ChildComponent domRef={this.startNode} ref={this.childComponent} {...this.props}
			                       addClickListener={this.addListener} removeClickListener={this.removeListener} />;
		}
	};
};

const mapStateToProps = (state: IStoreState) => ({
	todos: getTodos(state)
});

export default connect(
	mapStateToProps
)(withClickOutside(Todos));

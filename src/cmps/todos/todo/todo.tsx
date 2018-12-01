import React from 'react';
import './todo.scss';
import { ITodo } from '../../../models/todo';
import { Dispatch } from 'redux';
import { doToggleTodo } from '../../../actions/todos';
import { connect } from 'react-redux';
import { Spring } from 'react-spring';

type Props = {
	item: ITodo,
	onToggle: (item: ITodo) => Dispatch
};

type State = {
	opacity: number
}

class Todo extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			opacity: 1
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle(item) {
		this.setState({
			opacity: 0
		});
		setTimeout(() => this.props.onToggle(item), 600);
	}

	render() {
		const {item} = this.props;
		return (
			<Spring from={{opacity: 1}} to={this.state}>
				{props =>
					<div style={props}>
						<div className="container-fluid border border-info">
							<div className="row">
								<div className="col-2">
									<input type="checkbox" checked={item.completed} onChange={() => this.toggle(item)} />
								</div>
								<div className="col">
									<a href={item.link}><span className={item.completed ? 'crossed' : ''}>{item.name}</span></a>
								</div>
							</div>
						</div>
					</div>}
			</Spring>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onToggle: item => dispatch(doToggleTodo(item))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Todo);

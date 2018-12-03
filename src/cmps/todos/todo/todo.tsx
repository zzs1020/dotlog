import React from 'react';
import './todo.scss';
import { ITodo } from '../../../models/todo';
import { doToggleTodo } from '../../../actions/todos';
import { connect } from 'react-redux';
import { Spring } from 'react-spring';

type Props = {
	item: ITodo,
	onToggle: (item: ITodo) => void
};

type State = {
	opacity: number,
	stopAnimation: boolean
};

class Todo extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			stopAnimation: true, // don't let Spring auto animating when init component
			opacity: 1
		};

		this.fade = this.fade.bind(this);
	}

	fade() {
		this.setState({
			stopAnimation: false, // start animating
			opacity: 0 // end status
		});
	}

	render() {
		const {item, onToggle} = this.props;
		const {opacity, stopAnimation} = this.state;

		return (
			// onRest get call after animation finishes
			<Spring immediate={stopAnimation} to={{opacity}} onRest={() => onToggle(item)}>
				{props =>
					<div style={props}>
						<div className="container-fluid border border-info">
							<div className="row">
								<div className="col-2">
									<input type="checkbox" checked={item.completed} onChange={this.fade} />
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

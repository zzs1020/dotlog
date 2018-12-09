import React, { ChangeEvent } from 'react';
import './todo.scss';
import { ITodo } from '../../../models/todo';
import { doToggleTodo, doSaveTodoName } from '../../../actions/todos';
import { connect } from 'react-redux';
import { Spring } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
	item: ITodo,
	onToggle: (item: ITodo) => void,
	onSave: (id: string, newName: string) => void
};

type State = {
	opacity: number,
	stopAnimation: boolean,
	editable: boolean,
	name: string
};

class Todo extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			stopAnimation: true, // don't let Spring auto animating when init component
			opacity: 1,
			editable: false,
			name: this.props.item.name
		};

		this.fade = this.fade.bind(this);
		this.changeName = this.changeName.bind(this);
		this.changeEditable = this.changeEditable.bind(this);
		this.saveName = this.saveName.bind(this);
	}

	fade() {
		this.setState({
			stopAnimation: false, // start animating
			opacity: 0 // end status
		});
	}

	changeName(e: ChangeEvent<HTMLInputElement>) {
		this.setState({
			name: e.target.value
		});
	}

	saveName() {
		this.props.onSave(this.props.item.id, this.state.name);
		this.setState({editable: false});
	}

	changeEditable() {
		this.setState({editable: true});
	}

	render() {
		const {item, onToggle} = this.props;
		const {opacity, stopAnimation, editable, name} = this.state;

		return (
			// onRest get call after animation finishes
			<Spring immediate={stopAnimation} to={{opacity}} onRest={() => onToggle(item)}>
				{props =>
					<div style={props}>
						<div className="container-fluid border-bottom border-secondary row pt-1">
							<div className="col-auto">
								<input type="checkbox" checked={item.completed} onChange={this.fade} />
							</div>
							<div className="col">
								{editable ? <input type="text" autoFocus value={name} onChange={this.changeName} onBlur={this.saveName} /> :
									<a href={item.link} target="_blank" className={`todo-link ${item.completed ? 'crossed' : ''}`}>{name}</a>
								}
							</div>
							<div className="col-auto" onClick={this.changeEditable}><FontAwesomeIcon icon={['far', 'edit']} /></div>
						</div>
					</div>}
			</Spring>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onToggle: item => dispatch(doToggleTodo(item)),
		onSave: (id, newName) => dispatch(doSaveTodoName(id, newName))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Todo);

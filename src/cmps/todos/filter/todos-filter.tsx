import React from 'react';
import Button from '../../shared/button/button';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { doSetFilter } from '../../../actions/todos';
import { TODO_SHOW_COMPLETED } from '../../../constants/action-types';

type Props = {
	onSetFilter: (filterType: string) => Dispatch
};

const TodosFilter = ({onSetFilter}: Props) => {
	return (
		<Button onClick={() => onSetFilter(TODO_SHOW_COMPLETED)}>Completed</Button>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetFilter: filterType => dispatch(doSetFilter(filterType))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(TodosFilter);

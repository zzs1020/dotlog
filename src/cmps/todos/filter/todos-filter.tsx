import React from 'react';
import Button from '../../shared/button/button';
import { connect } from 'react-redux';
import { doSetFilter } from '../../../actions/todos';
import { TODO_SHOW_COMPLETED, TODO_SHOW_INCOMPLETE } from '../../../constants/action-types';
import { IStoreState } from '../../../models/store-state';

type Props = {
	currentFilter: string,
	onSetFilter: (filterType: string) => void
};

const TodosFilter = ({currentFilter, onSetFilter}: Props) => {
	const use = nextFilterAndText(currentFilter);
	return (
		<Button onClick={() => onSetFilter(use.filter)}>Show {use.text}</Button>
	);
};

const nextFilterAndText = (filter: string) => {
	if (filter === TODO_SHOW_COMPLETED) {
		return {filter: TODO_SHOW_INCOMPLETE, text: 'Incomplete'};
	} else {
		return {filter: TODO_SHOW_COMPLETED, text: 'Completed'};
	}
};

const mapStateToProps = ({todosFilterState}: IStoreState) => {
	return {
		currentFilter: todosFilterState
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetFilter: filterType => dispatch(doSetFilter(filterType))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodosFilter);

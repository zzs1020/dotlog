import React from 'react';
import { INotification } from '../../../models/notification';
import { IStoreState } from '../../../models/store-state';
import { connect } from 'react-redux';
import { getNotifications } from '../../../selectors/notifications';
import './notifications.scss';

type Props = {
	notifications: INotification[]
};

const Notifications = ({notifications}: Props) => {
	return (
		<div className="notifications">
			{notifications.map(note =>
				<div className={`notification alert alert-${note.type}`} key={note.id}>
					<h5>{note.title}</h5>
					<div>{note.msg}</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => {
	return {
		notifications: getNotifications(state)
	};
};

export default connect(
	mapStateToProps
)(Notifications);

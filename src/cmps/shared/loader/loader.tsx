import './loader.scss';
import React from 'react';

type Props = {
};

type State = {
	insertedElements: []
};

class Loader extends React.Component<Props, State> {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="loader-container">

		</div>;
	}
}

export default Loader;

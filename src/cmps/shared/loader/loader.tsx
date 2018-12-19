import './loader.scss';
import React from 'react';
import { IStoreState } from '../../../models/store-state.model';
import { ISingleLoader } from '../../../models/single-loader.model';
import { connect } from 'react-redux';

type Props = {
	loaders: ISingleLoader[]
};

type State = {
	loaderEls: any // {parentElId: loaderContainerHTML}
};
/**
 * To use Loader, put it once in somewhere in the app, it will work like a service to monitor loader status from redux
 * All you need to do it's just dispatch a position to loaderState, and this component will insert loader there
 */
class Loader extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			loaderEls: {}
		};

		this.checkAndAddLoader = this.checkAndAddLoader.bind(this);
		this.checkAndRemoveLoader = this.checkAndRemoveLoader.bind(this);
	}

	// monitors status
	componentDidUpdate(prevProps) {
		if (prevProps.loaders !== this.props.loaders) {
			// a loader status get deleted
			if (prevProps.loaders.length > this.props.loaders.length) {
				this.checkAndRemoveLoader(prevProps.loaders);
			} else { // a loader status added
				this.checkAndAddLoader(prevProps.loaders);
			}

		}
	}

	checkAndRemoveLoader(prevLoaders) {
		// props's inner older won't change because I deleted in order
		for (let i = 0; i < prevLoaders.length; i++) {
			if (this.props.loaders[i] !== prevLoaders[i]) {
				// found the missing loader, use it to check if there are any other loader using same element
				const removedLoaderId = prevLoaders[i].insertedElementId;
				const loaderOnSameElement = this.props.loaders.find(loader => loader.insertedElementId === removedLoaderId);
				if (!loaderOnSameElement) {
					const parent = document.getElementById(removedLoaderId);
					parent.removeChild(this.state.loaderEls[removedLoaderId]);
					this.setState(prevState => (
						{
							loaderEls: Object.assign({}, prevState.loaderEls, {[removedLoaderId]: undefined})
						}
					));
				}
				break;
			}
		}
	}

	checkAndAddLoader(prevLoaders) {
		// new loader status is always added at the end of array
		const newAddedLoader = this.props.loaders[this.props.loaders.length - 1];
		const existing = prevLoaders.some(loader => loader.insertedElementId === newAddedLoader.insertedElementId);

		if (!existing) {
			const loaderEl = this.insertLoader(newAddedLoader);
			this.setState(prevState => (
				{
					loaderEls: {...prevState.loaderEls, [newAddedLoader.insertedElementId]: loaderEl}
				}
			));
		}
	}

	insertLoader(loader: ISingleLoader): HTMLElement {
		const parent = document.getElementById(loader.insertedElementId);
		const loaderContainer = document.createElement('div');
		loaderContainer.className = 'loader-container';
		return parent.appendChild(loaderContainer); // will return a ref of loader container
	}

	// Loader component basically a service to monitor loaders' status and operate DOM, so itself doesn't need UI
	render() { return null; }
}

const mapStateToProps = (state: IStoreState) => ({
	loaders: state.loaderState
});

export default connect(
	mapStateToProps
)(Loader);

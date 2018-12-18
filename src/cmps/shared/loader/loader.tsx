import './loader.scss';
import React from 'react';
import { IStoreState } from '../../../models/store-state.model';
import { ISingleLoader } from '../../../models/single-loader.model';
import { connect } from 'react-redux';

type Props = {
	loaders: ISingleLoader[]
};

type State = {
	insertedElements: any // {elId: times} different api may add loader to same element
};
/**
 * To use Loader, put it once in somewhere in the app, it will work like a service to monitor loader status from redux
 * All you need to do it's just dispatch a position to loaderState, and this component will insert loader there
 */
class Loader extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			insertedElements: {}
		};
	}

	// monitors status
	componentDidUpdate(prevProps) {
		if (prevProps.loaders !== this.props.loaders) {
			// a loader status get deleted
			if (prevProps.loaders.length > this.props.loaders.length) {
				// props's inner older won't change because I deleted in order
				for (let i = 0; i < prevProps.loaders.length; i++) {
					if (this.props.loaders[i] !== prevProps.loaders[i]) {
						// find the missing loader, use it to check if there are any other loader using same element
						const loaderOnSameElement = this.props.loaders.find(loader => loader.insertedElementId === prevProps.loaders[i].insertedElementId);
						if (!loaderOnSameElement) {

						}
						break;
					}
				}
			} else { // a loader status added TODO: can = happen?, will redux fire once if three event come out?
				this.props.loaders.forEach(loader => {
					const loaderDupTimes = this.state.insertedElements[loader.insertedElementId];
					// if the el already attached a loader, remeber times so we know when to remove this loader (to prevent loader flash issue)
					if (loaderDupTimes) {
						this.setState(prevState => {
							return {
								insertedElements: Object.assign({}, prevState.insertedElements, { [loader.insertedElementId]: loaderDupTimes + 1 })
							};
						});
					} else {
						// new el to attach a loader
						this.insertLoader(loader);
						this.setState(prevState => {
							return {
								insertedElements: { ...prevState.insertedElements, [loader.insertedElementId]: 1 }
							};
						});
					}
				});
			}

		}
	}

	insertLoader(loader: ISingleLoader) {
		const parent = document.getElementById(loader.insertedElementId);
		const loaderContainer = document.createElement('div');
		loaderContainer.className = 'loader-container';
		parent.appendChild(loaderContainer);
	}

	// Loader component basically a service to monitor loaders' status and operate DOM, so itself doesn't need UI
	render() {
		return null;
	}
}

const mapStateToProps = (state: IStoreState) => ({
	loaders: state.loaderState
});

export default connect(
	mapStateToProps
)(Loader);

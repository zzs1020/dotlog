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

		this.checkAndAddLoaderEls = this.checkAndAddLoaderEls.bind(this);
		this.checkAndRemoveLoaderEls = this.checkAndRemoveLoaderEls.bind(this);
	}

	// monitors status
	componentDidUpdate(prevProps) {
		if (prevProps.loaders !== this.props.loaders) {
			const { removedLoaders, newAddedLoaders } = this.getChangedLoadersStatus(prevProps.loaders, this.props.loaders);
			// removing must happens after adding to prevent flicker
			this.checkAndAddLoaderEls(prevProps.loaders, newAddedLoaders);
			this.checkAndRemoveLoaderEls(removedLoaders);
		}
	}

	/**
	 * since redux doesn't garantee component will get all state changes, we have to compare it ourselves
	 * prev = [a,b,c,d,f], curr = [a,e,g] cause
	 * common = [a], removed = [b,c,d,f], newAdded = [e,g]
	 */
	getChangedLoadersStatus(prev, current): { removedLoaders: ISingleLoader[], newAddedLoaders: ISingleLoader[] } {
		let arr1;
		let arr2;
		// when current arr longer than prev, following loop works, for making other case working, switch 2 arrs
		if (prev.length > current.length) {
			arr1 = prev;
			arr2 = current;
		} else {
			arr1 = current;
			arr2 = prev;
		}
		let addedToCommon = false; // reset on each comparison round beginning, will be used on end of each round
		const common = []; // temp arr to record those common(unchanged) loaders
		const removedLoadersSet = new Set(); // use a Set to record removed loaders, since we need to repeatly add them
		const newAddedLoaders = [];

		for (let i = 0; i < arr1.length; i++) {
			addedToCommon = false;
			for (let j = 0; j < arr2.length; j++) {
				// if already added to common list, skip
				if (!common.includes(arr2[j])) {
					if (arr1[i] === arr2[j]) {
						common.push(arr2[j]);
						// take out the element that assumed 'removed' at last round
						removedLoadersSet.delete(arr2[j]);
						// found common, go to next round
						addedToCommon = true;
						break;
					} else {
						// if not equal, then assume it's removed
						removedLoadersSet.add(arr2[j]);
					}
				}
			}
			// if looped all prev loaders and can't find same loader, then this loader must be new added
			if (!addedToCommon) {
				newAddedLoaders.push(arr1[i]);
			}
		}

		// the result is reversed if prev > current
		if (prev.length < current.length) {
			return {
				removedLoaders: [...removedLoadersSet],
				newAddedLoaders
			};
		} else {
			return {
				removedLoaders: newAddedLoaders,
				newAddedLoaders: [...removedLoadersSet]
			};
		}
	}

	// use loader state and local element state to remove loader element
	checkAndRemoveLoaderEls(removedLoaders) {
		// check all removed states, if the loader el we going to remove is still existing on current loaders list, then don't remove this ele
		removedLoaders.forEach(removedLoader => {
			const insertedPos = removedLoader.insertedElementId;
			const loaderOnSameElement = this.props.loaders.find(loader => loader.insertedElementId === insertedPos);
			if (!loaderOnSameElement) {
				const parentEl = document.getElementById(insertedPos);
				parentEl.removeChild(this.state.loaderEls[insertedPos]);
				this.setState(prevState => (
					{
						loaderEls: Object.assign({}, prevState.loaderEls, { [insertedPos]: undefined })
					}
				));
			}
		});
	}

	// use loader states to add real Html elements
	checkAndAddLoaderEls(prevLoaders, newAddedLoaders) {
		// check all new loader state, if already have a loader ele associated, do nothing, otherwise create it
		newAddedLoaders.forEach(newAddedLoader => {
			const existing = prevLoaders.some(loader => loader.insertedElementId === newAddedLoader.insertedElementId);

			if (!existing) {
				// set up html and record this element in case to remove
				const loaderEl = this.insertLoaderEl(newAddedLoader);
				this.setState(prevState => (
					{
						loaderEls: { ...prevState.loaderEls, [newAddedLoader.insertedElementId]: loaderEl }
					}
				));
			}
		});
	}

	// create DOM element
	insertLoaderEl(loader: ISingleLoader): HTMLElement {
		const parent = document.getElementById(loader.insertedElementId);
		const loaderContainer = document.createElement('div');
		loaderContainer.className = 'loader-container';

		const spinner = document.createElement('div');
		spinner.className = 'spinner-grow text-success';

		loaderContainer.appendChild(spinner);
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

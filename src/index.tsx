import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './cmps/app';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArchive, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faArchive, faPlus);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

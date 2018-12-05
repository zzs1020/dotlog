import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './cmps/app';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleRight, faArchive, faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

library.add(faArchive, farBookmark, fasBookmark, faAngleDoubleRight, faEdit);

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

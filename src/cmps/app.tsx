import React from 'react';
import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchAndList from './search-and-list/search-and-list';
import Header from './header/header';
import Todos from './todos/todos';
import Notifications from './shared/notification/notifications';
import Loader from './shared/loader/loader';

const App = () => (
	<div className="container-fluid">
		<BrowserRouter>
			<>
				<Notifications />
				<Todos />
				<Header />
				<Switch>
					<Route path="/" exact component={SearchAndList} />
				</Switch>
			</>
		</BrowserRouter>
		<Loader />
	</div>
);

export default App;

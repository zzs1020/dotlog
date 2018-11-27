import React from 'react';
import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchAndList from './search-and-list/search-and-list';
import Header from './header/header';
import Todos from './todos/todos';

const App = () => (
	<div className="container-fluid">
		<BrowserRouter>
			<>
				<Header />
				<Todos />
				<Switch>
					<Route path="/" exact component={SearchAndList} />
				</Switch>
			</>
		</BrowserRouter>
	</div>
);

export default App;

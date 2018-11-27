import React from 'react';
import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchAndList from './search-and-list/search-and-list';
import Header from './header/header';

const App = () => (
	<div className="container-fluid">
		<BrowserRouter>
			<>
				<Header />
				<Switch>
					<Route path="/" exact component={SearchAndList} />
				</Switch>
			</>
		</BrowserRouter>
	</div>
);

export default App;

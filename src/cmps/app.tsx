import React from 'react';
import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Header from './header';

const App = () => (
	<div className="container-fluid">
		<BrowserRouter>
			<>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</>
		</BrowserRouter>
	</div>
);

export default App;

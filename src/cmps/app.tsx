import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Stories from './stories/stories';
import Header from './header/header';
import Todos from './todos/todos';
import Notifications from './shared/notification/notifications';
import Loader from './shared/loader/loader';

const App = () => (
	<>
		<BrowserRouter>
			<> {/** router can have only one child, can't include even comment node */}
				<Header />
				<Switch>
					<Route path="/" exact component={Stories} />
				</Switch>
			</>
		</BrowserRouter>
		<Notifications />
		<Todos />
		<Loader />
	</>
);

export default App;

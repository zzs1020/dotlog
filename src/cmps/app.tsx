import React from 'react';
import './app.scss';
import Stories from './stories';
import SearchStories from './searchStories';

const App = () =>
	<div className="app">
		<div className="interactions tst">
			<SearchStories />
		</div>
		<Stories />
	</div>;

export default App;

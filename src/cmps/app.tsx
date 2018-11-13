import React from 'react';
import './app.scss';
import Stories from './stories';
import SearchStories from './seachStories';

const App = () =>
	<div className="app">
		<div className="interactions">
			<SearchStories />
		</div>
		<Stories />
	</div>;

export default App;

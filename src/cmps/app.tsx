import React from 'react';
import './app.scss';
import Stories from './stories';
import SearchStories from './search-stories';

const App = () =>
	<div className="app">
		<div className="interactions">
			<SearchStories />
		</div>
		<Stories />
	</div>;

export default App;

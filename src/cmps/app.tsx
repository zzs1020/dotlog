import React from 'react';
import './app.scss';
import Stories from './stories';
import SearchStories from './search-stories';

const App = () =>
	<div className="container-fluid">
		<div className="m-2">
			<SearchStories />
		</div>
		<Stories />
	</div>;

export default App;

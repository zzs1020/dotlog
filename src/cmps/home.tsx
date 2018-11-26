import React from 'react';
import Stories from './stories';
import SearchStories from './search-stories';

const Home = () => (
	<>
		<div className="m-2">
			<SearchStories />
		</div>
		<Stories />
	</>
);

export default Home;

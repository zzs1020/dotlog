import React from 'react';
import Stories from './stories/stories';
import SearchStories from './search-stories/search-stories';

const SearchAndList = () => (
	<>
		<div className="m-2">
			<SearchStories />
		</div>
		<Stories />
	</>
);

export default SearchAndList;

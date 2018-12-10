import React from 'react';
import Stories from './stories/stories';
import SearchStories from './search-stories/search-stories';
import Pagination from './pagination/pagination';

const SearchAndList = () => (
	<>
		<div className="m-2">
			<SearchStories />
		</div>
		<Stories />
		<Pagination />
	</>
);

export default SearchAndList;

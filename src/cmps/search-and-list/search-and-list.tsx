import React from 'react';
import Stories from './stories/stories';
import SearchStories from './search-stories/search-stories';
import Pagination from './pagination/pagination';
import { isSmallDevice } from '../../constants/util';

const SearchAndList = () => (
	<>
		<div className="m-2">
			<SearchStories />
		</div>
		<Stories />
		{isSmallDevice() ? null : <Pagination />}
	</>
);

export default SearchAndList;

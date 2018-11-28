import axios from 'axios';
import { ISearchResult } from '../models/search-result';

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = (query: string): Promise<ISearchResult> => (
	axios.get(HN_BASE_URL + query).then((res) => res.data)
);

export {
	fetchStories
};

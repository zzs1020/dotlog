import axios from 'axios';
import { ISearchResult } from '../models/search-result';

const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

const fetchStories = (query: string, page: number = 0): Promise<ISearchResult> => (
	axios.get(HN_BASE_URL + query + '&page=' + page).then((res) => res.data)
);

export {
	fetchStories
};

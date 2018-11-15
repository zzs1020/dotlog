import axios from 'axios';

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = (query) => axios.get(HN_BASE_URL + query).then((res) => res.data);

export {
	fetchStories
};

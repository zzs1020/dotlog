export interface ISearchState extends ICurrentSearch {
	totalPages: number;
	maxCachedPage?: number;
}

export interface ICurrentSearch {
	query: string;
	page: number; // start from 1
}

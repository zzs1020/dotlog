export interface ISearchState extends ICurrentSearch {
	totalPages: number;
}

export interface ICurrentSearch {
	query: string;
	page: number;
}

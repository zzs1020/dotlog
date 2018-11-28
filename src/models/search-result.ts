export interface ITitle {
	value: string;
	matchLevel: string;
	fullyHighlighted: boolean;
	matchedWords: string[];
}

export interface IUrl {
	value: string;
	matchLevel: string;
	fullyHighlighted: boolean;
	matchedWords: string[];
}

export interface IAuthor {
	value: string;
	matchLevel: string;
	matchedWords: any[];
}

export interface IStoryText {
	value: string;
	matchLevel: string;
	matchedWords: string[];
	fullyHighlighted?: boolean;
}

export interface IHighlightResult {
	title: ITitle;
	url: IUrl;
	author: IAuthor;
	story_text: IStoryText;
}

export interface IHit {
	created_at: Date;
	title: string;
	url: string;
	author: string;
	points: number;
	story_text: string;
	comment_text?: any;
	num_comments: number;
	story_id?: any;
	story_title?: any;
	story_url?: any;
	parent_id?: any;
	created_at_i: number;
	_tags: string[];
	objectID: string;
	_highlightResult: IHighlightResult;
}

export interface ISearchResult {
	hits: IHit[];
	nbHits: number;
	page: number;
	nbPages: number;
	hitsPerPage: number;
	processingTimeMS: number;
	exhaustiveNbHits: boolean;
	query: string;
	params: string;
}

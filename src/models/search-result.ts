export interface SearchResult {
    hits:             Hit[];
    nbHits:           number;
    page:             number;
    nbPages:          number;
    hitsPerPage:      number;
    processingTimeMS: number;
    exhaustiveNbHits: boolean;
    query:            string;
    params:           string;
}

export interface Hit {
    createdAt:       string;
    title:           string;
    url:             null | string;
    author:          string;
    points:          number;
    storyText:       null | string;
    commentText:     null;
    numComments:     number;
    storyID:         null;
    storyTitle:      null;
    storyURL:        null;
    parentID?:       null;
    createdAtI:      number;
    tags:            string[];
    objectID:        string;
    highlightResult: HighlightResult;
}

export interface HighlightResult {
    title:      Author;
    url?:       Author;
    author:     Author;
    storyText?: Author;
}

export interface Author {
    value:             string;
    matchLevel:        string;
    matchedWords:      string[];
    fullyHighlighted?: boolean;
}

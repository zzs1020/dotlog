import React from 'react';
import './story.scss';

const Story = ({story, columns, onArchive}) => {
	const {title, url, author, num_comments, points, objectID} = story;

	return (
		<div className="story">
            <span style={{width: columns.title.width}}>
                <a href={url}>{title}</a>
            </span>
			<span style={{width: columns.author.width}}>
                {author}
            </span>
			<span style={{width: columns.comments.width}}>
                {num_comments}
            </span>
			<span style={{width: columns.points.width}}>
                {points}
            </span>
			<span style={{width: columns.archive.width}}>
            </span>
			<span style={{width: columns.archive.width}}>
				<button type="button" className="button-inline" onClick={() => onArchive(objectID)}> Archive </button>
			</span>
		</div>
	)
}

export default Story;

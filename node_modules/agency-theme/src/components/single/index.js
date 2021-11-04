import React from "react";
import { isEmpty } from 'lodash';

const Single = ( { data } ) => {

	if ( isEmpty( data ) ) {
		return null;
	}

	const { id, postId, title, content } = data;

	return (
		<div className="post-container wrapper">
			<div>
                <h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />
                <div
                    className="entry-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
					
			</div>
		</div>
	)
};

export default Single;
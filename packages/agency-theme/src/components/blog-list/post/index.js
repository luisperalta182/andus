import React from 'react';
import { isEmpty } from 'lodash';
import { getFormattedDate, sanitize } from '../../../utils/functions';
import Link from 'gatsby-link';
import './style.scss';

const Post = ( { post } ) => {
	return (
		<div className="featured-post-section" >
			<div className="featured-post-section__content">
				{ post.title }
				{ post.excerpt }
				<div className="featured-post-section__meta">
					{ post.date ? (
						<span className="featured-post-section__date">
							{ getFormattedDate( post.date ) }
						</span>
					) : null }
					<Link
						className="featured-post-section__read-more"
						to={ post.uri }
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Post;
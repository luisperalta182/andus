import React from 'react';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';

import Post from '../post';
import './style.scss';

const Blog = ( { pageContext, pageTitle } ) => {

	const { group, index, first, last, pathPrefix } = pageContext;

	if ( isEmpty( group ) ) {
		return null;
	}

	return (
		<div className="blog wrapper">
			<h1>{ pageTitle }</h1>
			{ group.map( ( { node } ) => (
				<Post key={ node.id } post={ node } />
			) ) }
		</div>
	)
}
export default Blog
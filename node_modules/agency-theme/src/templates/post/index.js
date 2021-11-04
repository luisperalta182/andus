import React from 'react';
import Single from '../../components/single';

const Post = ( props ) => {

	const { pageContext } = props;
	return (
        <>
			<Single data={ pageContext }/>
        </>
	)
};

export default Post;
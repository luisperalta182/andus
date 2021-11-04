const createAllPages = require( './create-pages/pages' );
const createFrontPage = require( './create-pages/front-page' );
const createApproachPage = require( './create-pages/approach' );
const createAboutPage = require( './create-pages/about' );
const createBlogPage = require( './create-pages/blog' );
const createAllPosts = require( './create-pages/posts' );
const path = require( 'path' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createAllPages( { actions, graphql } );
	await createFrontPage( { actions, graphql } );
	await createApproachPage( { actions, graphql } );
	await createAboutPage( { actions, graphql } );
	await createBlogPage( { actions, graphql } );
	await createAllPosts( { actions, graphql } );
};
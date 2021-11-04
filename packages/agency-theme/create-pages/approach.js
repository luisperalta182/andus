const { slash } = require( `gatsby-core-utils` );
const approachTemplate = require.resolve(`../src/templates/approach/index.js`);


const GET_APPROACH_PAGE = `
  query GET_APPROACH_PAGE{
    HWGraphQL {
        posts(first: 3) {
            nodes {
              id
              databaseId
              bodyClasses
              title
              excerpt
              date
              uri
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              categories {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
          allPosts: posts(first: 5000) {
            nodes {
              id
              databaseId
              bodyClasses
              title
              excerpt
              date
              uri
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              categories {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        pageBy(uri: "approach") {
          title
          ApproachSection {
            approachSection {
              homeAboutHeading
              homeAboutOne
              homeAboutTwo
            }
            heroSection {
              heroTaglineOne
              heroTaglineTwo
              heroTaglineYellow
            }
            capabilitiesSection {
              capabilitiesHeading
              capabilitiesText
            }
            fieldGroupName
            processSection {
              processHeader
            }
          }
        }
      }
  }
`;


module.exports = async ( { actions, graphql } ) => {
    const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_APPROACH_PAGE )
			.then( ( { data } ) => {

				const { HWGraphQL: { pageBy, posts, allPosts } } = data;

				let allThePosts = [];
				allPosts.nodes && allPosts.nodes.map( post => {

					// Push the categories data in form of an array, to make it searchable
					let postData = post;
					postData.categoriesData = [];

					postData.categories.edges.map( category => {
						postData.categoriesData.push( category.node.name );
					} );

					allThePosts.push( postData );

				} );

				return { page: pageBy, posts: posts.nodes, allPosts: allThePosts };
			} );
	};

    // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page, posts, allPosts } ) => {

		createPage( {
			path: `/approach`,
			component: slash( approachTemplate ),
			context: {
				page,
				posts,
				postSearchData: {
					allPosts: allPosts,
					options: {
						indexStrategy: `Prefix match`,
						searchSanitizer: `Lower Case`,
						TitleIndex: true,
						AuthorIndex: true,
						CategoryIndex: true,
						SearchByTerm: true,
					},
				},
			},
		} );

	} )

};

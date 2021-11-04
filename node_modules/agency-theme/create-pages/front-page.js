const { slash } = require( `gatsby-core-utils` );
const frontPageTemplate = require.resolve(`../src/templates/front-page/index.js`);


const GET_FRONT_PAGE = `
  query GET_FRONT_PAGE{
    HWGraphQL {
      posts(first: 5) {
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
      pageBy(uri: "home") {
        title
        HomeSection {
          heroSection {
            fieldGroupName
            heroTaglineOne
            heroTaglineTwo
            heroTaglineYellow
          }
          aboutSection {
            fieldGroupName
            homeAboutOne
            homeAboutTwo
          }
          fieldGroupName
          approachSection {
            fieldGroupName
            homeApproachOne
            homeApproachOneBolded
            homeApproachTwo
          }
          partnersSection {
            fieldGroupName
            partnersHeading
            partnersHeadingBold
            partnersList {
              ... on hwgraphql_Partner {
                id
                title
                partners {
                  partnerCpt {
                    partnerField
                    partnerName
                    partnerImage {
                      uri
                    }
                  }
                }
              }
            }
          }
          articlesSection {
            articlesHeading
          }
        }
        frontPageMeta {
          searchSection {
            fieldGroupName
            searchLabel
            taxonomies {
              name
              uri
            }
            taxonomyIconOne {
              id
              altText
              sourceUrl
            }
            taxonomyIconTwo {
              id
              altText
              sourceUrl
            }
            taxonomyIconThree {
              altText
              id
              sourceUrl
            }
          }
          featuredPostsSection {
            heading
            featuredPosts {
              ... on hwgraphql_Post {
                id
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
              }
            }
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
		return await graphql( GET_FRONT_PAGE )
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
			path: `/`,
			component: slash( frontPageTemplate ),
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

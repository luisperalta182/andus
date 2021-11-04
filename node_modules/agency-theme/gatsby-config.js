module.exports = ({ wordPressUrl }) => ({
	siteMetadata: {
		title: `&US Agency`,
		description: `Gatsby WordPress Theme`,
		author: `&US Agency`,
		// siteUrl: `${frontendUrl}`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		// {
		// 	resolve: 'gatsby-plugin-load-script',
		// 	options: {
		// 	  src: '/scrollScript.js', // Change to the script filename
		// 	},
		// },
		// `gatsby-transformer-sharp`,
		// `gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-plugin-transition-link',
			options: {
			  injectPageProps: false,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `&US Agency`,
				short_name: `&US`,
				start_url: `/`,
				background_color: `#eaeaea`,
				theme_color: `#1e5663`,
				display: `minimal-ui`,
				icon: `${__dirname}/src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-graphql`,
			options: {
				// This type will contain remote schema Query type
				typeName: `hwgraphql`,
				// This is field under which it's accessible
				fieldName: `HWGraphQL`,
				// Url to query from
				url: `${wordPressUrl}/graphql`,
				refetchInterval: 60,
			},
		},
		// {
		// 	resolve: 'gatsby-plugin-graphql-image',
		// 	options: {
		// 		schemaName: "hwgraphql",
		// 		imageFieldName: "sourceUrl"
		// 	}
		// }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
})
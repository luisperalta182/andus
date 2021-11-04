module.exports = [{
      plugin: require('../../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[],"injectPageProps":false},
    },{
      plugin: require('../../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"&US Agency","short_name":"&US","start_url":"/","background_color":"#eaeaea","theme_color":"#1e5663","display":"minimal-ui","icon":"C:\\Users\\Peralta\\Documents\\Boombit\\Gatsby\\packages\\agency-theme/src/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"2b5a902c941b88fbd0daf82ce9b1f226"},
    },{
      plugin: require('../../packages/agency-theme/gatsby-browser.js'),
      options: {"plugins":[],"wordPressUrl":"http://gatsbywp.local"},
    }]

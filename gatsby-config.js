/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              // width: 800,
              // ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              // height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              // containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },

          // {
          //   resolve: `gatsby-source-filesystem`,
          //   options: {
          //     name: `pages`,
          //     path: `${__dirname}/src/pages/`,
          //   },
          // },
          // {
          //   resolve: `gatsby-source-filesystem`,
          //   options: {
          //     name: `data`,
          //     path: `${__dirname}/src/data/`,
          //     ignore: [`**/\.*`], // ignore files starting with a dot
          //   },
          // },

          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
              ignore: [`**/\.*`],
            },
          },

          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,
        ],
      },
    },
  ],
}

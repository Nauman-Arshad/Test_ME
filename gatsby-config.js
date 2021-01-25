module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Rao Akif'
  },
  plugins: [

    { // Gatsby Source FileSystem
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    
    // Transforming MarkDown Files
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },

    // TYPESCRIPT
    {
      // Gatsby Plugin Typescript
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },

    // PROGRESSIVE WEB APPLICATION

    {
      // Gatsby Plugin Manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Cool Application`,
        short_name: `Cool App`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        icons: [
          {
            src: `/src/images/favicon.png`,
            sizes: `64x64`,
            type: `image/png`,
          },
          {
            "src": "/images/logo192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
      
          {
            "src": "/images/logo512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ], // Add or remove icon sizes as desired
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            name: `Die coole Anwendung`,
            short_name: `Coole Anwendung`,
            description: `Die Anwendung macht coole Dinge und macht Ihr Leben besser.`,
          },
        ],
      },

    },
    
    // SERVICE-WORKER
  
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve("./src/service-worker.js"),
        precachePages: [
          `/index/`, 
          `/blog/*`,
          './',
          'index.html',
          'favicon.ico',
          'manifest.json',
          './logo192.png',
          './logo512.png',
        ],
      },
    },

    // React Helmet
    `gatsby-plugin-react-helmet`,

    // For Static Website Cauching in Netlify Deployment; for S3 Instance see Doc.
    'gatsby-plugin-netlify-cache',


    // Plugins for the Blog
    `gatsby-plugin-sass`,

    
    // { // Gatsby Source Contentful
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
  ],
}

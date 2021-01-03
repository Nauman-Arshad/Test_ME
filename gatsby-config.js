module.exports = {
  plugins: [

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
        precachePages: [`/index/`, `/About/`, `/blog/*`],
      },
    },

    // React Helmet
    `gatsby-plugin-react-helmet`,

    // For Static Website Cauching in Netlify Deployment; for S3 Instance see Doc.
    'gatsby-plugin-netlify-cache'
  ],
}

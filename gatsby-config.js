module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Rao Akif'
  },
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
  ],
}

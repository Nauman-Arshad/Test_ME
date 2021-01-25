module.exports = {
  plugins: [
    ///yarn add gatsby-plugin-typescript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    //add more config files here
  ],
}

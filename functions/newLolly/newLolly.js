const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require("faunadb");
const q = faunadb.query;
const shortid = require("shortid");
const dotenv = require("dotenv");
dotenv.config()

const typeDefs = gql`
  type Query {
    lolly : [Lolly!]
    getLolly(lollyPath:String!):Lolly
  }
  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly (recipientName: String!, message: String!,senderName: String!, flavourTop: String!,flavourMiddle: String!,flavourBottom: String!) : Lolly
  }
`


const resolvers = {
  Query: {
    getLolly: async (_,{lollyPath}) => {
      
      try {
        const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET_KEY });

        const result = await client.query(
          q.Get(q.Match(q.Index("lolly_by_path"), lollyPath))
          )
          
               
         return result.data
        
       
      }
      catch (error) {
        console.log(error)
      }
    }

  },
  Mutation: {
    createLolly: async (_, { flavourTop, flavourMiddle, flavourBottom, recipientName, message, senderName }) => {
      try {
        const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET_KEY });
        const id = shortid.generate()
        const result = await client.query(
          q.Create(q.Collection('bootcamp2020project12e'), {
            data: { flavourTop:flavourTop, flavourMiddle:flavourMiddle, flavourBottom:flavourBottom, recipientName:recipientName, message:message, senderName, lollyPath:id }
          })
        )
        
          return result.data
      }
      catch(error) {
        console.log(error)
      }
    }
  }
}



const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()



const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require("faunadb");
const q = faunadb.query;
const shortid = require("shortid");

const typeDefs = gql`
  type Query {
    hello: String
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
    getNewLolly: (root, args, context) => {
      return [{}]
  },
},
  Mutation : {
    createLolly: async (_, args) => {

        console.log("args = ",args);
      
      const client = new faunadb.Client({secret: process.env.FAUNA});
      const id = shortid.generate();
      args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection("bootcamp2020project12e"), {
          data: args
        })
      );
        
      console.log('result', result);
      console.log('result', result.data);
      return result.data
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()

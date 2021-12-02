import fetch from "cross-fetch"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export const client = new ApolloClient({
  link: new HttpLink({
    uri:
      "https://wl3izooxpjhojbxpe2lsrdv5we.appsync-api.us-east-2.amazonaws.com/graphql",
    fetch,
    headers: {
      "x-api-key": "da2-ndsskhmm6vdmde6szerpo3p7fq",
    },
  }),
  cache: new InMemoryCache(),
})
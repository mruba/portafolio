import { ApolloServer } from 'apollo-server-micro'
import { typeDefs, resolvers } from '../../graphql/schema'
import { context } from '../../graphql/context'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { ServerResponse } from 'http'

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers, context })

const startServer = apolloServer.start()

export default async function handler(req: MicroRequest, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
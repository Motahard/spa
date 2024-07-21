import { NextRequest } from 'next/server';

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import GET from '@/pages/api/resolvers/dogs';
import typeDefs from '@/pages/api/schemas';

const resolvers = {
  Query: {
    searchDog: async (_: any, { name }: { name: string }) => {
      return await GET(name);
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const POST = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

export default POST;

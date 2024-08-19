import { NextRequest } from 'next/server';

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import searchDog from '@/pages/api/resolvers/dogs';
import typeDefs from '@/pages/api/schemas';

const resolvers = {
  Query: {
    dog: async (_: unknown, { name }: { name: string }) => {
      return await searchDog(name);
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const POST = startServerAndCreateNextHandler<NextRequest>(
  apolloServer,
  {
    context: async (req) => ({ req }),
  }
);

export default POST;

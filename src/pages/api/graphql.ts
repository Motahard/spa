import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import typeDefs from '@/pages/api/schemas';
import { dogsResolver } from '@/pages/api/resolvers/dogs';
import { NextRequest } from 'next/server';

const resolvers = {
  Query: {
    searchDog: async (_, { name }: { name: string }) => {
      return await dogsResolver(name);
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

export default handler;
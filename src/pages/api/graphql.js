import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import typeDefs from '@/pages/api/schemas';
import { dogsResolver } from '@/pages/api/resolvers/dogs';

const resolvers = {
  Query: {
    dogs: dogsResolver,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);

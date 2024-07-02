import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import typeDefs from '@/pages/api/schemas';
import { dogsResolver } from '@/pages/api/resolvers/dogs';
import { createOrder } from '@/pages/api/resolvers/create-order';

const resolvers = {
  Query: {
    dogs: dogsResolver,
    createOrder: createOrder
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
export default startServerAndCreateNextHandler(apolloServer);

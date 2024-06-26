import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import typeDefs from '@/pages/api/schemas';

const resolvers = {
  Query: {
    dogs: async () => {
      const data = await fetch(
        'https://api.api-ninjas.com/v1/dogs?name=retriever',
        {
          headers: {
            'X-Api-Key': 'DdOiEDBgIr9QMrW82bjyWQ==mTkQcHRvr6KZirMC',
          },
        }
      );
      const dogs = await data.json();
      return dogs;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
export default startServerAndCreateNextHandler(apolloServer);

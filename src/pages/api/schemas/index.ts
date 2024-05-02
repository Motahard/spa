import gql from 'graphql-tag';

const typeDefs = gql`
  type Query {
    dogs: [Dog]
  }

  type Dog {
    name: String
  }
`;

export default typeDefs;

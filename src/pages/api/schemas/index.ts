import gql from 'graphql-tag';

const typeDefs = gql`
  type Query {
    dog(name: String): [Dog]
  }

  type Dog {
    image_link: String
    name: String
    min_life_expectancy: Int
    energy: Int
    good_with_strangers: Int
    good_with_other_dogs: Int
  }
`;

export default typeDefs;

import gql from 'graphql-tag';

export const getSearchDog = gql`
  query getSearchDog($name: String) {
    searchDog(name: $name) {
      image_link
      name
      min_life_expectancy
      energy
      good_with_strangers
      good_with_other_dogs
    }
  }
`;

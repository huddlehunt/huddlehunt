import { graphql, gql } from 'react-apollo';

const getUserGql = gql`
  query getUser($username: String!) {
    User(username: $username) {
      id
      firstName
      lastName
      email
      username
      occupation
      exp
      location
      age
    }
  }
`;

const withData = graphql(getUserGql, {
  options: ({ username }) => ({
    variables: {
      username
    }
  }),
  props: ({ data: { loading, User } }) => ({
    loading,
    User
  })
});

export default comp => withData(comp);

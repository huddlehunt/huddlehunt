import { graphql, gql } from 'react-apollo';

const getUserGql = gql`
  query getUser($userid: ID!) {
    User(id: $userid) {
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
  options: ({ userid }) => ({
    variables: {
      userid
    }
  })
});

export default comp => withData(comp);

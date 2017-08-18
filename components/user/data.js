import { graphql, gql } from 'react-apollo';

const getUserGql = gql`
  query {
    user {
      id
      firstName
      lastName
      email
	  occupation
	  exp
	  location
	  age
    }
  }
`;

const withData = graphql(getUserGql);

export default comp => withData(comp);

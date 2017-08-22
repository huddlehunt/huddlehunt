import { graphql, gql } from 'react-apollo';
import { connect } from 'react-redux';
import { dispatchers } from '../AuthFields/store';
// import createUserGql from './signupUser.gql';

const createUserGql = gql`
  mutation signupUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $occupation: String!
    $username: String!
    $location: String!
    $exp: Int
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      occupation: $occupation
      username: $username
      location: $location
      exp: $exp
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;

const withMutation = graphql(createUserGql, {
  props: ({ mutate }) => ({
    mutations: {
      signUp: ({
        firstName,
        lastName,
        email,
        password,
        occupation,
        username,
        location,
        exp
      }) =>
        mutate({
          variables: {
            firstName,
            lastName,
            email,
            password,
            occupation,
            username,
            location,
            exp
          }
        })
    }
  })
});

const mapDispatchToProps = dispatch => ({
  actions: {
    signIn(token) {
      dispatch(dispatchers.signIn(token));
    }
  }
});

export default comp => {
  const compWithApollo = withMutation(comp);
  return connect(null, mapDispatchToProps)(compWithApollo);
};

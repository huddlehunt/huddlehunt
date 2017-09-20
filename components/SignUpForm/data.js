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
    $profilePic: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      occupation: $occupation
      username: $username
      location: $location
      exp: $exp
      profilePic: $profilePic
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        username
      }
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
        exp,
        profilePic
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
            exp,
            profilePic
          }
        })
    }
  })
});

const mapDispatchToProps = dispatch => ({
  actions: {
    signIn(token, username) {
      dispatch(dispatchers.signIn(token, username));
    }
  }
});

export default comp => {
  const compWithApollo = withMutation(comp);
  return connect(null, mapDispatchToProps)(compWithApollo);
};

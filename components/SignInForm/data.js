import { connect } from 'react-redux';
import { graphql, gql } from 'react-apollo';
import { dispatchers } from '../AuthFields/store';
// import signInGql from './signinUser.gql';

const signInGql = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        username
      }
    }
  }
`;

const withMutation = graphql(signInGql, {
  props: ({ mutate }) => ({
    mutations: {
      signIn: ({ email, password }) =>
        mutate({
          variables: { email, password }
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

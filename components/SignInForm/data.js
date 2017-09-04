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
    signIn(token, user) {
      dispatch(dispatchers.signIn(token, user));
    }
  }
});

export default comp => {
  const compWithApollo = withMutation(comp);
  return connect(null, mapDispatchToProps)(compWithApollo);
};

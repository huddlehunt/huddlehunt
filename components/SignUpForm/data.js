import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { dispatchers } from '../AuthFields/store';
import createUserGql from './signupUser.gql';

const withMutation = graphql(createUserGql, {
  props: ({ mutate }) => ({
    mutations: {
      signUp: ({ firstName, lastName, email, password, occupation, username, location, exp }) =>
        mutate({
          variables: { firstName, lastName, email, password, occupation, username, location, exp }
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

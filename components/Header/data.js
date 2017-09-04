import { connect } from 'react-redux';
import { dispatchers } from '../AuthFields/store';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  actions: {
    logout: () => dispatch(dispatchers.signOut())
  }
});

export default comp => connect(mapStateToProps, mapDispatchToProps)(comp);

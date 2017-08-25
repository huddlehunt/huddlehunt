import PropTypes from 'prop-types';
import connect from './data';
import UserSummary from './summary/index';

const UserProfile = ({ loading, User }) => {
  if (loading) {
    return (
      <span>
        <h1>Loading...</h1>
      </span>
    );
  }

  return (
    <div>
      {User != null && <UserSummary user={User} />}
    </div>
  );
};

UserProfile.propTypes = {
  loading: PropTypes.bool.isRequired,
  User: PropTypes.object
};

UserProfile.defaultProps = {
  User: null
};

export default connect(UserProfile);

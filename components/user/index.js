import PropTypes from 'prop-types';
import connect from './data';
import UserSummary from './summary/index';
import { dump } from '../../libraries/helpers';

const UserProfile = ({ data: { user } }) =>
  <div>
  <UserSummary user={user} />
  </div>;

UserProfile.propTypes = {
  data: PropTypes.object.isRequired
};

export default connect(UserProfile);

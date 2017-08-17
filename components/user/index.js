import PropTypes from 'prop-types';
import connect from './data';
import { dump } from '../../libraries/helpers';

const UserProfile = ({ data: { user } }) =>
  <div>
    {dump(user)}
    {user && <div>test</div>}
  </div>;

UserProfile.propTypes = {
  data: PropTypes.object.isRequired
};

export default connect(UserProfile);

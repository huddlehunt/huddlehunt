import PropTypes from 'prop-types';
import { Link } from '../../../routes';

const UserSummary = props =>
  <div>
    <b>Name: </b>
    <Link
      as={`/user/${props.user.username}`}
      href={`/user?id=${props.user.id}`}
    >
      <a>
        {props.user.firstName} {props.user.lastName}
      </a>
    </Link>
    <b> Age: </b>
    {props.user.age}
    <br />
    <b>Occupation: </b>
    {props.user.occupation}
    <br />
    <b>Years of experience: </b>
    {props.user.exp}
    <br />
    <b>Location: </b>
    {props.user.location}
  </div>;

UserSummary.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserSummary;

import PropTypes from 'prop-types';
import { Link } from '../../../routes';
import * as S from './styles';

const UserSummary = props =>
  <S.UserSummary>
    <S.P>
      <b>Name: </b>
      <Link
        route="user"
        params={{
          username: props.user.username
        }}
        passHref
      >
        <a>
          {props.user.firstName} {props.user.lastName}
        </a>
      </Link>
      <b> Age: </b>
      {props.user.age}
    </S.P>
    <p>
      <b>Occupation: </b>
      {props.user.occupation}
    </p>
    <p>
      <b>Years of experience: </b>
      {props.user.exp}
    </p>
    <p>
      <b>Location: </b>
      {props.user.location}
    </p>
  </S.UserSummary>;

UserSummary.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserSummary;

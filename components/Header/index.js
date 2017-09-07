import PropTypes from 'prop-types';
import LinkList from '../../components/LinkList';
import * as S from './styles';
import connect from './data';

const Header = ({ pathname, authenticated, username, actions: { logout } }) =>
  <S.Header>
    <LinkList
      pathname={pathname}
      authenticated={authenticated}
      username={username}
      logout={logout}
    />
  </S.Header>;

Header.defaultProps = {
  authenticated: false
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
  username: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
};

export default connect(Header);

import { Helmet } from 'react-helmet';
import App from '../components/App';
import UserProfile from '../components/User';
import withData from '../libraries/withData';

export default withData(props =>
  <App>
    <Helmet>
      <title>User Profile</title>
    </Helmet>
    <div>
      <h1>user</h1>
      <p>HELLO WORLD! HELLO FROM RAN!</p>
      <hr />
    </div>
    <UserProfile username={props.url.query.username} />
  </App>
);

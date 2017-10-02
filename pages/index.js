import PostList from '../components/PostList';
import HuddleMap from '../components/HuddleMap';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

export default withData(props =>
  <DefaultCon {...props}>
    <PostList />
    <HuddleMap />
  </DefaultCon>
);

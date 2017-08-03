import PostList from '../components/PostList';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import FacilityTile from '../components/FacilityTile';

//Just some seed data so we can see the component
const facProps = {
	name: "Facility 1",
	amenities: {
			wifi: true,
			power: true,
			coffee: true,
			beer: true,
			meetingRoomsMaxSize: 1
		},
	description: "Lorem ipsum sit dolor amet yada yada",
	location: {
		lat: 10,
		lon: 10
	},
	price: 10
};

export default withData(props =>
  <DefaultCon {...props}>
    <PostList />
	<FacilityTile {...facProps}/>
  </DefaultCon>
);

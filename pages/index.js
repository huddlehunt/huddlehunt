import PostList from '../components/PostList';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import FacilityTile from '../components/FacilityTile';

const seedName = "Facility 1";
const seedAmenities = {
	wifi: true,
	power: true,
	coffee: true,
	beer: true,
	meetingRoomsMaxSize: 1
};
const seedDescription = "Lorem ipsum sit dolor amet yada yada";
const seedLocation = {
	lat: 10,
	lon: 10
};
const seedPrice = 10;

export default withData(props =>
  <DefaultCon {...props}>
    <PostList />
	<FacilityTile facName={seedName} facAmenities={seedAmenities} facDescription={seedDescription} facLocation={seedLocation} facPrice={seedPrice}/>
  </DefaultCon>
);

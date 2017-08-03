import PropTypes from 'prop-types';
import { Link } from 'next-url-prettifier';

//facPrice and facLocation props are not used here (yet) ... included to remind me to incorporate in future
const FacilityTile = ({facName, facAmenities, facDescription, facLocation, facPrice }) =>
	<div>
	<div>
		<Link href="#">
			<a>PHOTOS PLACEHOLDER</a>
		</Link>
	</div>
	<div>
		<Link href="#">
			<a>{facName}</a>
		</Link>
		<span>
		{facAmenities.wifi && "WIFISYMBOL"}
		{facAmenities.power && "PWRSYMBOL"}
		{facAmenities.coffee && "COFFEESYMBOL"}
		{facAmenities.beer && "BEERSYMBOL"}
		{facAmenities.meetingRoomsMaxSize > 0 && (facAmenities.meetingRoomsMaxSize)}
		</span>
	</div>
	<div>
		{facDescription}
	</div>
	</div>;
	
FacilityTile.PropTypes = {
	facName: PropTypes.string.isRequired,
	facAmenities: PropTypes.shape({
		wifi: PropTypes.bool,
		power: PropTypes.bool,
		coffee: PropTypes.bool,
		beer: PropTypes.bool,
		meetingRoomsMaxSize: PropTypes.number
	}).isRequired,
	facDescription: PropTypes.string.isRequired,
	facLocation: PropTypes.shape({
		lat: PropTypes.number,
		lon: PropTypes.number,
	}).isRequired,
	facPrice: PropTypes.shape({
		currency: PropTypes.string,
		value: PropTypes.number
	}).isRequired
}

export default FacilityTile;

/*
export default styled(FacilityTile)`
//styles go here
`;
*/
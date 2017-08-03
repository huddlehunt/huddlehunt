import PropTypes from 'prop-types';
import { Link } from 'next-url-prettifier';

//price and location props are not used here (yet) ... included to remind me to incorporate in future
const FacilityTile = (props) =>
	<div>
		<div>
			<Link href="#">
				<a>PHOTOS PLACEHOLDER</a>
			</Link>
		</div>
		<div>
			<Link href="#">
				<a>{props.name}</a>
			</Link>
			<span>
			{props.amenities.wifi && "WIFISYMBOL"}
			{props.amenities.power && "PWRSYMBOL"}
			{props.amenities.coffee && "COFFEESYMBOL"}
			{props.amenities.beer && "BEERSYMBOL"}
			{props.amenities.meetingRoomsMaxSize > 0 && (props.amenities.meetingRoomsMaxSize)}
			</span>
		</div>
		<div>
			{props.description}
		</div>
	</div>;
	
FacilityTile.PropTypes = {
	name: PropTypes.string.isRequired,
	amenities: PropTypes.shape({
		wifi: PropTypes.bool,
		power: PropTypes.bool,
		coffee: PropTypes.bool,
		beer: PropTypes.bool,
		meetingRoomsMaxSize: PropTypes.number
	}).isRequired,
	description: PropTypes.string.isRequired,
	location: PropTypes.shape({
		lat: PropTypes.number,
		lon: PropTypes.number,
	}).isRequired,
	price: PropTypes.shape({
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
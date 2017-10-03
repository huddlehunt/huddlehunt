import PropTypes from 'prop-types';
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const HuddleMapContainer = props =>
  <Map
    google={props.google}
    initialCenter={{
      lat: 40.854885,
      lng: -88.081807
    }}
    style={{
      width: '90%',
      height: '70%'
    }}
    zoom={13}
    centerAroundCurrentLocation
  />;

HuddleMapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDDfMon4fVrYPJZbbUoXXHozUxAEE5DId0'
})(HuddleMapContainer);

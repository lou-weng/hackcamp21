import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const location = {
    address: '2329 West Mall, Vancouver, British Columbia, Canada.',
    lat: 49.261330,
    lng: -123.253770,
  }


class VaxTestMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCHSKvzwHrSEJeYqPpga2GPuUFRLiUfvdM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <location
            lat={location.lat}
            lng={location.lng}
            address={location.address}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default VaxTestMap;
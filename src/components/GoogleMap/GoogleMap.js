import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      } 
    return (
        <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBxNHOTBKbAg0863T40qvBG8v3vUOzYZxw" }}
          defaultCenter={location}
          defaultZoom={10}
        >
        </GoogleMapReact>
      </div>
    );
};

export default GoogleMap;
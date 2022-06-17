import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -2.537154,
  lng: -44.294484, 
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA3fw0LJXfQ87FtMSvqLdy5wGCKhjZkmLA"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        <></>
        < Marker position={center}/>
      </GoogleMap>
  ) : <></>
}

export default Map;
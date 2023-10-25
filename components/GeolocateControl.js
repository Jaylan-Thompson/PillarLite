import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function GeolocateControl({ map, setLongitude, setLatitude }) {
  useEffect(() => {
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    // Add the geolocate control to the map
    map.addControl(geolocateControl);

    // Listen to the geolocate event and update the state with the user's location
    map.on('geolocate', (e) => {
      setLongitude(e.coords.longitude);
      setLatitude(e.coords.latitude);
    });

    return () => {
      // Clean up resources (if needed) when the component is unmounted
      map.removeControl(geolocateControl);
    };
  }, [map, setLongitude, setLatitude]);
}

export default GeolocateControl;

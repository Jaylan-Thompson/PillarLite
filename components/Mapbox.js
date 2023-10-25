import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../styles/Mapbox.module.css';
import mapboxgl from 'mapbox-gl';
import GeolocateControl from './GeolocateControl';
import AssetLocationMarkers from './AssetLocationMarkers';
import AssetView from './AssetView';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXVnbWVudGVkcmVhbGl0eSIsImEiOiJjbDZ5YmZyeXkyd3IxM2RvYWZkbXNwY21sIn0.YeCen0oCCFAYTyqeIhAK5g';

function MapBox({ setLongitude, setLatitude }) {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [clickedMarkerId, setClickedMarkerId] = useState(null);

  useEffect(() => {
    // Create a new map instance
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-118.37, 34.05],
      zoom: 12,
      pitch: 60,
    });

    // Set map for other components' reference
    setMap(newMap);
  }, []);

  // Handle marker click
  const handleMarkerClick = (id) => {
    setClickedMarkerId(id);
  };


  return (
    // Pass props from other components
    <div ref={mapContainer} className={styles.map}>
      {map && <GeolocateControl map={map} setLongitude={setLongitude} setLatitude={setLatitude} />}
      {map && <AssetLocationMarkers map={map} onMarkerClick={handleMarkerClick} />}
      {clickedMarkerId && <AssetView assetId={clickedMarkerId} onClose={() => setClickedMarkerId(null)} />}
    </div>
  );
}

export default MapBox;

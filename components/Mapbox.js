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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: isDarkMode ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/light-v10',
      center: [-118.37, 34.05],
      zoom: 12,
      pitch: 60,
    });

    setMap(newMap);
  }, [isDarkMode]);

  const handleMarkerClick = (id) => {
    setClickedMarkerId(id);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div ref={mapContainer} className={styles.map}>
      {map && <GeolocateControl map={map} setLongitude={setLongitude} setLatitude={setLatitude} />}
      {map && <AssetLocationMarkers map={map} onMarkerClick={handleMarkerClick} />}
      {clickedMarkerId && <AssetView assetId={clickedMarkerId} onClose={() => setClickedMarkerId(null)} />}

      <button className={styles.toggleDarkMode} onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default MapBox;

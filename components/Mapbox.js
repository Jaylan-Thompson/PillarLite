import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../styles/Mapbox.module.css';
import mapboxgl from 'mapbox-gl';
import GeolocateControl from './GeolocateControl';
import AssetLocationMarkers from './AssetLocationMarkers';
import AssetView from './AssetView';
import DarkModeToggle from './DarkModeToggle';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXVnbWVudGVkcmVhbGl0eSIsImEiOiJjbDZ5YmZyeXkyd3IxM2RvYWZkbXNwY21sIn0.YeCen0oCCFAYTyqeIhAK5g';

function MapBox({ setLongitude, setLatitude }) {
  const mapContainer = useRef(null); // Reference to the DOM element where the map will be rendered
  const [map, setMap] = useState(null); // State to hold the current map instance
  const [clickedMarkerId, setClickedMarkerId] = useState(null); // State to hold the ID of the clicked marker
  const [isDarkMode, setIsDarkMode] = useState(false); // State to toggle dark mode

  useEffect(() => {
    // Create a new map instance
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: isDarkMode ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/light-v10',
      center: [-118.37, 34.05], // Default center coordinates
      zoom: 12,
      pitch: 60,
    });

    // Event listener for map load event
    newMap.on('load', () => {
      setMap(newMap);
    });
  }, []);

  useEffect(() => {

    // Update mapbox style based on dark mode state
    if (map) {
      map.setStyle(isDarkMode ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/light-v10');
    }
  }, [isDarkMode, map]);

  // Handle marker click
  const handleMarkerClick = (id) => {
    setClickedMarkerId(id);
  };
  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
        <div className={styles.fullScreenContainer}>
            <img src="/images/Pillar.png" alt="Pillar" className={styles.fullScreenImage} />
        </div>
        <div
            ref={mapContainer}
            className={styles.map}
            style={{ backgroundColor: isDarkMode ? '#343332' : '#f6f6f4' }}
        >
            {map && <GeolocateControl map={map} setLongitude={setLongitude} setLatitude={setLatitude} />}
            {map && <AssetLocationMarkers map={map} onMarkerClick={handleMarkerClick} />}
            {clickedMarkerId && <AssetView assetId={clickedMarkerId} onClose={() => setClickedMarkerId(null)} isDarkMode={isDarkMode} />}
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    </>
);
}

export default MapBox;


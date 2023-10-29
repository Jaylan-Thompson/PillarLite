import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

function AssetLocationMarkers({ map, onMarkerClick }) {
  const [data, setData] = useState(null);
  const markersRef = useRef([]);  // Use a ref to store the current markers

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://map.pillarworld.xyz/api/assetsLocations/all')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, []);

  useEffect(() => {
    // Before adding new markers, remove all existing markers from the map
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Render markers on the map
    if (map && data) {
      data.assetsLocations.forEach((location) => {
        // Create a custom marker with your image
        const customMarker = document.createElement('div');
        customMarker.style.backgroundImage = `url(/images/iconframe.png)`;
        customMarker.style.width = '10vh';
        customMarker.style.height = '10vh';
        customMarker.style.backgroundSize = 'cover';
        customMarker.style.zIndex = '1'
        customMarker.style.cursor = 'pointer';

        // Add the custom marker to the map
        const marker = new mapboxgl.Marker({ element: customMarker })
          .setLngLat([location.longitude, location.latitude])
          .addTo(map);

        // Store the marker in ref for future removal
        markersRef.current.push(marker);

        // Extract assetId from the API
        const assetId = location.assetId;

        // Add a click event listener to trigger AssetView Popup with assetId
        customMarker.addEventListener('click', () => {
          onMarkerClick(assetId);
        });
      });
    }
  }, [map, data, onMarkerClick]);

  return null;
}

export default AssetLocationMarkers;

import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

function AssetLocationMarkers({ map, onMarkerClick }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('http://34.42.12.234/api/assetsLocations/all')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, []);

  // Render markers on the map
  if (map && data) {
    data.assetsLocations.forEach((location) => {
      // Create a custom marker with your image
      const customMarker = document.createElement('div');
      customMarker.style.backgroundImage = `url(/images/iconframe.png)`;
      customMarker.style.width = '10vh';
      customMarker.style.height = '10vh';
      customMarker.style.backgroundSize = 'cover';
      customMarker.style.cursor = 'pointer';

      // Add the custom marker to the map
      const marker = new mapboxgl.Marker({ element: customMarker })
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);

      // Extract assetId from the API
      const assetId = location.assetId;

      // Add a click event listener to trigger AssetView Popup with assetId
      customMarker.addEventListener('click', () => {
        onMarkerClick(assetId);
      });
    });
  }
}

export default AssetLocationMarkers;

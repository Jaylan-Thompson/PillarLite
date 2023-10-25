import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

function AssetLocationMarkers({ map }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('http://34.42.12.234/api/assetsLocations/all')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);

        // If map and data are both available, add markers to the map
        if (map && responseData) {
          responseData.assetsLocations.forEach((location) => {
            // Create a custom marker with your image
            const customMarker = document.createElement('div');
            customMarker.style.backgroundImage = `url(/images/iconframe.png)`;
            customMarker.style.width = '10vh'; // Set the width of your marker
            customMarker.style.height = '10vh'; // Set the height of your marker
            customMarker.style.backgroundSize = 'cover';

            // Add the custom marker to the map
            const marker = new mapboxgl.Marker({ element: customMarker })
              .setLngLat([location.longitude, location.latitude])
              .addTo(map);
          });
        }
      });

    return () => {
      // Clean up any resources when the component unmounts
    };
  }, [map]);
}

export default AssetLocationMarkers;

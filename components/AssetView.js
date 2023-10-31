import React, { useEffect, useState } from 'react';
import styles from '../styles/AssetView.module.css';

function AssetView({ assetId, onClose, isDarkMode }) { 
    // State to hold the details of the asset fetched from the API
    const [assetData, setAssetData] = useState(null);

    // useEffect hook to trigger the API call whenever the assetId prop changes
    useEffect(() => {
        // Check if assetId is provided
        if (assetId) {
            // Fetch the list of assets from the API
            fetch('https://map.pillarworld.xyz/api/data')
                .then((response) => response.json())
                .then((data) => {
                    // Find the asset from the list that matches the provided assetId
                    const matchedAsset = data.assets.find(asset => asset.id === assetId);
                    // Update the state with the matched asset's details
                    setAssetData(matchedAsset);
                })
                .catch((error) => {
                    // Log any error that occurs during the fetch
                    console.error("Error fetching asset details:", error);
                });
        }
    }, [assetId]); // Dependency array - re-run the effect when assetId changes

    // Handler to close the AssetView, triggers the onClose prop if provided
    const handleClose = () => {
        if (onClose) onClose();
    };

    // Render the AssetView component with API data
    return (
        <div className={`${styles.assetView} ${isDarkMode ? styles.assetViewDark : ''}`}>
            <h2>{assetData ? assetData.assetDescription : `Loading...`}</h2>
            <img src={assetData ? assetData.assetThumbnailUrl : "default-thumbnail.png"} alt="Asset Thumbnail" />
            <p>Artist ID: {assetData ? assetData.artistId : "Loading..."}</p>
            <p>Created At: {assetData ? new Date(assetData.createdAt).toLocaleString() : "Loading..."}</p>
            <button onClick={handleClose} className={styles.closeButton}>Close</button>
        </div>
    );
}

export default AssetView;

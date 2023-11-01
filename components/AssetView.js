import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/AssetView.module.css';
import LoadingAnimation from './LoadingAnimation';

function AssetView({ assetId, onClose, isDarkMode }) {
    // State to hold the details of the asset fetched from the API
    const [assetData, setAssetData] = useState(null);
    // State to control loader visibility
    const [showLoader, setShowLoader] = useState(true);
    // State to control loader opacity for the fade-out effect
    const [loaderOpacity, setLoaderOpacity] = useState(1);
    const startTime = useRef(Date.now());

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

                    // Preload the image
                    const img = new Image();
                    img.src = matchedAsset.assetThumbnailUrl;
                    img.onload = () => {
                        const elapsedTime = Date.now() - startTime.current;
                        const remainingTime = Math.max(750 - elapsedTime, 0);

                        setTimeout(() => {
                            setLoaderOpacity(0);  // Begin fade out
                            setTimeout(() => {
                                setShowLoader(false);
                            }, 300);  // fade-out duration is 300ms
                        }, remainingTime);
                    };
                })
                .catch((error) => {
                    // Log any error that occurs during the fetch
                    console.error("Error fetching asset details:", error);
                    setShowLoader(false);  // Hide loader in case of an error
                });
        }
    }, [assetId]);

    // Handler to close the AssetView, triggers the onClose prop if provided
    const handleClose = () => {
        if (onClose) onClose();
    };
    return (
        <div className={`${styles.assetView} ${isDarkMode ? styles.assetViewDark : ''}`}>
            <div className={styles.imageContainer}>
                <img src={assetData?.assetThumbnailUrl} alt="Asset Thumbnail" />
            </div>
            {showLoader && 
                <div className={`${styles.loaderOverlay} ${isDarkMode ? styles.loaderOverlayDark : ''}`} style={{ opacity: loaderOpacity }}>
                    <LoadingAnimation />
                </div>
            }
            <div className={styles.textContainer}>
                <p className={styles.assetTitle}>{assetData?.assetDescription}</p>
                <p className={styles.assetArtistID}>Artist ID: {assetData?.artistId}</p>
                <p className={styles.assetDetails}>Created At: {assetData && new Date(assetData.createdAt).toLocaleString()}</p>
                <button onClick={() => window.open('https://apps.apple.com/us/app/pillar-world/id1615630217', '_blank')} className={styles.collectButton}>Collect</button>
                <button onClick={handleClose} className={styles.closeButton}>Close</button>
            </div>
        </div>
    );
    
}

export default AssetView;

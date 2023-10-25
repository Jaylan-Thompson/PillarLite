import React from 'react';
import styles from '../styles/AssetView.module.css';

function AssetView({ assetId, onClose }) {
    if (!assetId) {
        return null;
    }

    const handleClose = () => {
        if (onClose) onClose();
    };

    return (
        <div className={styles.assetView}>
            <h2>Placeholder Title for Asset ID {assetId}</h2>
            <p>This is some placeholder content for Asset ID {assetId}.</p>
            <button onClick={handleClose} className={styles.closeButton}>Close</button>
        </div>
    );
}

export default AssetView;


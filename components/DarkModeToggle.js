import React from 'react';
import styles from '../styles/Mapbox.module.css';

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <button className={styles.toggleDarkMode} onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;

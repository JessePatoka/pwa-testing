import React from 'react';
import styles from './Toast.module.css';

export default function({ children, handleClick = () => console.log('nothing') }) {
  return (
    <div className={styles.toast} onClick={handleClick} onTouchEnd={handleClick}>
      {children}
    </div>
  );
}

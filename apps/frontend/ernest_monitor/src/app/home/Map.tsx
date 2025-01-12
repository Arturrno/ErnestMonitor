// components/Map.tsx
import React from 'react';

const Map = () => {
  return (
    <div className="map-container" style={{
      width: '1090px',
      height: '390px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      margin: '0 auto',
      display: 'block',
    }}>
      <img src="https://westwoodcurtis.com/wp-content/uploads/2021/01/Fish-Creek-Bridge-1090x390.jpg" alt="Fish Creek Bridge" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }} />
    </div>
  );
};

export default Map;
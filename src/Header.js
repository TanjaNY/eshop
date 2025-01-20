import React from 'react';

const Header = ({ isLoading, imageUrl, onImageError }) => (
  <header className="App-header">
   
    {isLoading ? (
      <p>Loading...</p>
    ) : (
        <img
          src={imageUrl}
          alt="Sample"
          className="mx-auto mb-4 object-cover rounded-full"
          style={{ width: '100px', height: '100px' }}
        onError={onImageError}
/>
      
    )}
    
    
  </header>
);

export default Header;

import React from 'react';

const Header = ({ isLoading, imageUrl, onImageError }) => (
  <header className="App-header">
   <h1>Welcome to My Shop</h1>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
        <img
          src={imageUrl}
          alt="Sample"
          className="mx-auto mb-4 object-cover rounded-full"
          style={{ width: '200px', height: '200px' }}
        onError={onImageError}
/>
      
    )}
    
    
  </header>
);

export default Header;

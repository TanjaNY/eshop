import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import Header from './Header';
import './App.css';


const S3_CONFIG = {
  BUCKET_URL: 'https://reactphotos1601202501.s3.eu-central-1.amazonaws.com',
  IMG_FOLDER: 'Products',
};

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    imagePath: `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMG_FOLDER}/banana-7474703_1280.jpg`,
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    imagePath: `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMG_FOLDER}/cherries-6308871_1280.jpg`,
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const imageUrl = `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMG_FOLDER}/sample.jpg`;

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/150';
    e.target.onerror = null;
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <h1 className="text-3xl font-bold py-4">Welcome to My Shop</h1>
        
        <Header 
          isLoading={isLoading} 
          imageUrl={imageUrl} 
          onImageError={handleImageError} 
        />
        
        <Router>
        <nav className="w-full bg-gray-800 p-4 mb-8">
            <div className="flex items-center gap-64 text-white">
                 <Link to="/" className="hover:text-gray-300">Home</Link>
                 <span className="text-gray-500">|</span>
                 <Link to="/cart" className="hover:text-gray-300">Cart</Link>
             </div>
        </nav>
          
          <main className="w-full">
            <Routes>
              <Route 
                path="/" 
                element={<ProductList products={products} addToCart={addToCart} />} 
              />
              <Route path="/cart" element={<Cart cart={cart} />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
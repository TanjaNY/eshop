import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            {cart.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.imagePath}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-md"
                    style={{ width: '100px', height: '100px' }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150';
                      e.target.onerror = null;
                    }}
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">${total.toFixed(2)}</span>
            </div>
            
            <button className="w-full mt-6 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
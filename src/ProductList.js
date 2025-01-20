function ProductList({ products, addToCart }) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.imagePath}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
                style={{ width: '100px', height: '100px' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150';
                  e.target.onerror = null;
                }}
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default ProductList;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { products } from '../components/productData';
import { useCart } from '../context/CartContext.jsx';

function ProductPage() {
  const { productName } = useParams();
  const product = products.find((p) => p.name === decodeURIComponent(productName));
  const { addToCart } = useCart();
  const [alertMessage, setAlertMessage] = useState('');

  if (!product) {
    return (
      <div>
        <Navigation />
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-3xl font-bold text-red-600">Product not found</h1>
          <Link to="/" className="mt-4 inline-block bg-yellow-600 text-white px-4 py-2 rounded">
            Go Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const suggestedProducts = products.filter((p) => p.id !== product.id).slice(0, 8);

  const handleAddToCart = () => {
    addToCart(product);
    setAlertMessage('Product added to cart!');
    setTimeout(() => setAlertMessage(''), 3000);
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4">
        {/* Alert Message */}
        {alertMessage && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded bg-green-100 text-green-700 font-bold shadow-lg">
            {alertMessage}
          </div>
        )}

        {/* Product Details Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="w-full md:w-1/2 h-96 object-cover mb-4 md:mb-0 md:mr-4 rounded-lg shadow-md"
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-yellow-600 font-bold text-2xl mb-4">${product.price}</p>
            <button
              onClick={handleAddToCart}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded transition duration-200 mb-6"
            >
              Add to Cart
            </button>


            {/* Product Details */}
            <div className="mb-6">
              <p className="text-gray-600">{product.details}</p>
            </div>

            {/* Product Specifications */}
            {product.specifications && (
              <div>
                <ul className="list-disc ml-6 text-gray-600">
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Suggested Products Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Suggested Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {suggestedProducts.map((suggestedProduct) => (
              <div key={suggestedProduct.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <Link to={`/product/${encodeURIComponent(product.name)}`}> 
              <img
                  src={suggestedProduct.image}
                  alt={`Image of ${suggestedProduct.name}`}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">{suggestedProduct.name}</h3>
                <p className="text-gray-600 mb-2">{suggestedProduct.description}</p>
                <p className="text-yellow-600 font-bold mb-4">${suggestedProduct.price}</p>
                <Link
                  to={`/product/${encodeURIComponent(suggestedProduct.name)}`}
                  className="block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-center transition duration-200"
                >
                  View Details
                </Link>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;

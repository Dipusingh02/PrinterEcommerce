// src/pages/CartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext.jsx';

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  const handleBuyNow = () => {
    navigate('/support'); // Redirect to the support page
  };

  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-md mb-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-600 font-bold">${product.price}</p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded mt-4"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={handleBuyNow} // Attach the click handler
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;

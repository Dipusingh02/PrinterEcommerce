import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-yellow-600 bg-opacity-90 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold">PrinterrSellOne</h2>
            <p className="mt-4 text-sm">
            PrinterrSellOne is your one-stop shop for all your printing needs. From high-quality printers to top-rated accessories, we’re here to make your printing experience seamless and efficient.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/#home" className="hover:text-blue-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-blue-300 transition-colors duration-300">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-blue-300 transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-blue-300 transition-colors duration-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:+918298110860" className="hover:text-blue-300 transition-colors duration-300">
                  +91 82981108610
                </a>
              </li>
              <li>
                <a href="mailto:2236767.cse.cec@cgc.edu.in" className="hover:text-blue-300 transition-colors duration-300">
                 2236767.cse.cec@cgc.edu.in
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

        </div>
        <div className="mt-8 border-t border-blue-400 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} PrinterrSellOne. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

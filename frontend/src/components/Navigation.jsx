import React, { useState } from 'react';
import { HiMenu, HiX, HiHome, HiShoppingCart, HiSupport, HiUser } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "../assets/printerlogo1.png";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        when: 'afterChildren',
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      category: 'HP LaserJet Pro Series',
      items: ['HP LaserJet Pro M15w', 'HP LaserJet Pro MFP M428fdw', 'HP LaserJet Pro MFP M479fdw']
    },
    {
      category: 'HP OfficeJet Series',
      items: ['HP OfficeJet Pro 9015', 'HP OfficeJet Pro 8025', 'HP OfficeJet 5255']
    },
    {
      category: 'HP Envy Series',
      items: ['HP Envy 6055e', 'HP Envy 7155']
    },
    {
      category: 'HP DeskJet Series',
      items: ['HP DeskJet 2755e', 'HP DeskJet Plus 4155']
    },
    {
      category: 'HP PageWide Series',
      items: ['HP PageWide Pro 477dw', 'HP PageWide Managed P57750dw']
    },
    {
      category: 'Accessories',
      items: ['HP Ink Cartridges', 'HP Toner Cartridges', 'HP Paper Trays', 'HP Duplexers', 'HP Print Servers', 'HP Wireless Print Adapters', 'HP Printer Stands', 'HP USB Print Cables']
    },
    {
      category: 'Dell Printers and Accessories',
      items: ['Dell Color Smart Multifunction Printers', 'Dell Mono Laser Printers', 'Dell Inkjet Printers', 'Dell Toner Cartridges', 'Dell Drum Units', 'Dell Paper Trays', 'Dell USB Print Cables', 'Dell Wireless Print Adapters', 'Dell Printer Stands', 'Dell Extra Memory Modules', 'Dell Maintenance Kits']
    },
    {
      category: 'Canon Printers and Accessories',
      items: ['Canon PIXMA Series', 'Canon imageCLASS Series', 'Canon Maxify Series', 'Canon Selphy Series', 'Canon Ink Cartridges', 'Canon Toner Cartridges', 'Canon Drum Units', 'Canon Paper Trays', 'Canon Photo Paper', 'Canon Wireless Print Adapters', 'Canon Print Servers', 'Canon USB Print Cables', 'Canon Maintenance Kits']
    }
  ];

  return (
    <nav className="bg-yellow-600 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <HiMenu className="block h-6 w-6" />
              ) : (
                <HiX className="block h-6 w-6" />
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            <Link to="/"> <img className="h-8 w-auto" src={logo} alt="Printer Selling Site" /></Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center">
                  <HiHome className="mr-2" /> Home
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleProductDropdown}
                    className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center"
                  >
                    <HiShoppingCart className="mr-2" /> Products
                  </button>
                  {isProductDropdownOpen && (
                    <div className="absolute cursor-pointer left-0 mt-2 flex flex-col w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {products.map((product, index) => (
                          <div key={index} className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white">
                            <strong>{product.category}</strong>
                            <ul>
                              {product.items.map((item, idx) => (
                                <li key={idx} className="pl-4">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/support" className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center">
                  <HiSupport className="mr-2" /> Support
                </Link>
                <Link to="/cart" className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center">
                  <HiShoppingCart className="mr-2" /> Cart
                </Link>
                <Link to="/" className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center">
                  <HiUser className="mr-2" /> Account
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile number for assistance */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span className="text-white">   <a
                href="tel:+918298110860">
            Need Assistance? Call: +91 82981108610 </a></span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="sm:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block rounded-md bg-blue-700 px-3 py-2 text-base font-medium text-white flex items-center"
              >
                <HiHome className="mr-2" /> Home
              </Link>
              <div className="relative">
                <button
                  onClick={toggleProductDropdown}
                  className="block w-full text-left rounded-md bg-blue-700 px-3 py-2 text-base font-medium text-white flex items-center"
                >
                  <HiShoppingCart className="mr-2" /> Products
                </button>
                {isProductDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {products.map((product, index) => (
                        <div key={index} className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white">
                          <strong>{product.category}</strong>
                          <ul>
                            {product.items.map((item, idx) => (
                              <li key={idx} className="pl-4">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/support"
                onClick={closeMobileMenu}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white flex items-center"
              >
                <HiSupport className="mr-2" /> Support
              </Link>
              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white flex items-center"
              >
                <HiShoppingCart className="mr-2" /> Cart
              </Link>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white flex items-center"
              >
                <HiUser className="mr-2" /> Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;

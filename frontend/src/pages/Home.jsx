import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { products as productData } from '../components/productData';
import Footer from '../components/Footer';
import img1 from '../assets/printercleaner.jpeg';
import img2 from '../assets/pprinsert.jpeg';
import img3 from '../assets/usepr.jpeg';
import img4 from '../assets/pprc.jpeg';

const articles = [
  {
    title: 'How to Clean Your Printer',
    content: 'A clean printer ensures better performance and longevity. Learn how to clean the printer rollers, nozzles, and exterior with this step-by-step guide.',
    image: img1,
    link: '/support',
  },
  {
    title: 'How to Insert Paper',
    content: 'Struggling to insert paper into your printer? This guide provides easy steps for loading paper correctly to avoid jams and errors.',
    image: img2,
    link: '/support',
  },
  {
    title: 'How to Use Your Printer',
    content: 'New to printers? Learn the basics of setting up, connecting, and using your printer effectively for the best results.',
    image: img3,
    link: '/support',
  },
  {
    title: 'How to Change Ink Cartridges',
    content: 'Follow these simple instructions to change ink cartridges without spilling ink or damaging your printer.',
    image: img4,
    link: '/support',
  },
];

function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NY58CK0LN8';
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NY58CK0LN8');
    `;
    document.head.appendChild(inlineScript);
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold mb-6 text-orange-800">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
            <Link to={`/product/${encodeURIComponent(product.name)}`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-yellow-700 font-bold">${product.price}</p>
              <Link to={`/product/${encodeURIComponent(product.name)}`} className="mt-4 inline-block bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                View Details
              </Link>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Articles Section */}
        <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">Helpful Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.content}</p>
              <Link to={article.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;

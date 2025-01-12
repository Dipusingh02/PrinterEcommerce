import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import securityGuardImage from '../assets/supportimg.png';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Support() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzedBM7eRQojzgwTTU3CjKmCRBrE3WYlAg8JKCaYryyDNZebrJc1Sh-1b4hX69Sq_Mf/exec', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Ensure formData is correct
      });
      
      const result = await response.json();
      if (result.status === 'success') {
        alert('Message sent successfully');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  };
  
  
  return (
    <>
    <Navigation />
    <section className="py-12 bg-gray-800 text-white" id="contact">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center">
          <FaMapMarkerAlt size={30} className="mr-4 text-blue-400" />
          Need Assistance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col">
            <img src={securityGuardImage} alt="Security Guard" className="rounded-lg mb-4 object-cover" />
            <h3 className="text-3xl font-semibold mb-4">Contact Details</h3>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt size={24} className="mr-4 text-blue-400" />
              <span>Chandigarh,India</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope size={24} className="mr-4 text-blue-400" />
              <a href="mailto:2236767.cse.cec@cgc.edu.in" className="hover:underline">2236767.cse.cec@cgc.edu.in</a>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone size={24} className="mr-4 text-blue-400" />
              <a href="tel:+918298110860" className="hover:underline">+91 82981108610</a>
            </div>
          </div>
          <div className="bg-gray-900 shadow-lg rounded-lg p-6">
            <h3 className="text-3xl font-semibold mb-4">Instant Support</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" name="firstName" placeholder="First Name" className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500" value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500" value={formData.lastName} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500" value={formData.email} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone" className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500" value={formData.phone} onChange={handleChange} />
              <textarea name="message" placeholder="Message" className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500" rows="4" value={formData.message} onChange={handleChange} />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-200">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Support;

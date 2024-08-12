// src/components/Newsletter.jsx

import React from 'react';
import Wheat from '../assets/images/Wheat.jpg'; // Adjust the path as needed

const Newsletter = () => {
  return (
    <div className="relative text-white py-16 px-4">
      <img src={Wheat} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full md:flex-1 p-3 rounded-lg text-black"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-[#16A34A] text-white p-3 rounded-lg mt-4 md:mt-0 md:ml-4"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

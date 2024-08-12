import React from 'react'
import Winery from '../assets/images/winery.jpg';

const About = () => {
  return (
    <div>
      {/* Banner with overlay */}
      <div className="relative w-full h-64">
        <img
          src={Winery}
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
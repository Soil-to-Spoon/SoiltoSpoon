//Create a page saying blog under construction

import React from 'react';
import Watering from '../assets/images/Watering.jpg';
 import Winery from '../assets/images/winery.jpg';


const Blog = () => {
  return (
    <>
    <div>
      {/* Banner with overlay */}
      <div className="relative w-full h-64">
        <img
          src={Winery}
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Blog</h1>
        </div>
      </div>
    </div>
      
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex items-center justify-center bg-white rounded-lg p-6">
          <div className="mr-6 text-left">
            <h2 className="text-6xl font-bold text-[#16A34A] mb-4">Oops! <br /></h2>
            <h3 className="text-3xl font-bold text-[#16A34A] mb-4">Under Construction</h3>
            <p className="text-lg text-brown">
              We're busy planting the blogs and waiting for the harvest.<br />
              Come back soon to see what we've grown!
            </p>
          </div>
          <img src={Watering} alt="Under Construction Farmer" className="w-1/3 h-auto" />
        </div>
      </div>
      
    </>
  );
}

export default Blog





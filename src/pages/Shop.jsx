// src/components/Shop.jsx
import { products } from '../components/NavLinks';

import React from 'react';

import Winery from '../assets/images/winery.jpg';

import { motion } from "framer-motion";

const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Poultry', 'Meat', 'Roots and Tubers'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = React.useMemo(() => {
    if (!products || !Array.isArray(products)) return [];
    if (selectedCategory === 'All') return products;
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (productId) => {
    // Handle add to cart functionality here
  };

  const handleChatWithFarmer = (productId) => {
    // Trigger chat with farmer functionality here
  };

  return (
    <div>
      <div className="relative w-full h-64">
        <img
          src={Winery}
          alt="Shop Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Products</h1>
        </div>
      </div>
      
      <div className="container mx-auto py-20 px-20">
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-green-500 text-white' : ' text-[#16A34A]'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <motion.div 
              key={product.id} 
              className="border rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: [null, 1.05, 1.03] }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <div className="flex justify-between items-center">
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleChatWithFarmer(product.id)}
                  >
                    Chat with Farmer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
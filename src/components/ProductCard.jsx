import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to="/shop">
          <button className="text-white bg-green-600 py-2 px-4 rounded-full">Shop Now</button>
        </Link >
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { FeatureData } from '../components/NavLinks';

const FeatureSection = () => {
  return (
    <div className="flex justify-evenly gap-x-1 py-10">
      {FeatureData.map((feature, index) => (
        <div key={index} className="text-center">
          <div className="mb-4 bg-[#5D8C55] p-6 rounded-full inline-block border-2 border-[#ECDC67]">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;

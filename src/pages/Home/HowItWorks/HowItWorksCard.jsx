import React from 'react';

const HowItWorksCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="text-center mb-4">
        <img
          src={icon}
          alt={title}
          className="mx-auto w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-md font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorksCard;

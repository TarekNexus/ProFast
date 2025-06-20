import React from "react";

const BenefitsCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
      <img
        src={icon}
        alt={title}
        className="w-40 md:w-48 object-contain border-r px-4 border-dashed border-[#d9d9d9]"
      />
      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;

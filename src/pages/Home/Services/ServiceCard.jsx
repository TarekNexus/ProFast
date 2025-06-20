import React from "react";

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div className="bg-white hover:bg-[#CAEB66]  shadow-md rounded-2xl p-6 border  hover:shadow-lg transition-all duration-300">
      <div className="text-4xl flex justify-center text-primary  mb-4">
        <Icon />
      </div>

      <h2 className="text-xl text-center font-semibold text-primary mb-2">{title}</h2>
      <p className=" text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;

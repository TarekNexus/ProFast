import React from 'react';


import pickupIcon from '../../../assets/bookingIcon.png';
import codIcon from '../../../assets/bookingIcon.png';
import hubIcon from '../../../assets/bookingIcon.png';
import smeIcon from '../../../assets/bookingIcon.png';
import HowItWorksCard from './HowItWorksCard';


const services = [
  {
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: pickupIcon,
  },
  {
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: codIcon,
  },
  {
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: hubIcon,
  },
  {
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: smeIcon,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-10">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <HowItWorksCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

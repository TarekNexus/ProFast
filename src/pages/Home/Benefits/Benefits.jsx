import React from "react";

import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";
import callCenter from "../../../assets/safe-delivery.png";
import BenefitsCard from "./BenefitsCard";

const benefitsData = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    icon: liveTracking,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: safeDelivery,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: callCenter,
  },
];

const Benefits = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-10">
    
      <div className="max-w-6xl mx-auto space-y-8 border-t border-b border-dashed border-[#d9d9d9] py-8">
        {benefitsData.map((item, index) => (
          <BenefitsCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;

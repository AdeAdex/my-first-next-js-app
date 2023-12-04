import React from "react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <img src={icon} alt={`Icon for ${title}`} className="w-16 h-16 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-blue-700 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;

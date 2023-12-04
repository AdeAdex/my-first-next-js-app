import React from "react";
import FeatureCard from "./FeatureCard";
import { Festive } from "next/font/google";

const FeatureSection = ({ features }) => {
  return (
    <section className="container mx-auto mt-8 p-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Featured Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;

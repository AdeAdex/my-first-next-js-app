import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-800 text-white">
      <div className="container mx-auto p-8 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl text-center mb-8">
          Discover the power of our amazing features. Join us today!
        </p>
        <button className="bg-white text-blue-800 py-2 px-4 rounded-full font-semibold hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

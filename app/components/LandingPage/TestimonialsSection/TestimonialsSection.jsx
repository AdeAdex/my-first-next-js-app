import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="container mx-auto mt-8 p-8 bg-gray-200">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialsCard
            key={index}
            content={testimonial.content}
            user={testimonial.user}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from "react";

const TestimonialsCard = ({content, user}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600">
        {content}
      </p>
      <p className="text-blue-700 font-semibold mt-4">{user}</p>
    </div>
  );
};

export default TestimonialsCard;

import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-red-500 border-gray-500 rounded-full animate-spin h-16 w-16 border-t-red-500 border-b-gray-500 border-r-red-500"></div>
      <div className="ml-3 text-white">Loading...</div>
    </div>
  );
};

export default Loading;

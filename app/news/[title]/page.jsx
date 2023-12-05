import React from "react";

const News = ({ params }) => {
  const title = params.title;
  return <div className="container mx-auto py-24 px-4 lg:px-24">
  {title}
  </div>;
};

export default News;

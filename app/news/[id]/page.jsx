// pages/news/[id]/[id].jsx
"use client";
import React, { useEffect, useState } from "react";
import { displayNews } from "@/app/utils/displayData";

const News = ({ params }) => {
  const id = params.id;
  const [newsItem, setNewsItem] = useState(null);

  const getNewsDetails = async () => {
    const newsList = await displayNews();
    const selectedNewsItem = newsList.allNews.find((news) => news.id == id);
    return selectedNewsItem;
  };

  useEffect(() => {
    const fetchData = async () => {
      const newsDetails = await getNewsDetails();

      if (!newsDetails) {
      } else {
        setNewsItem(newsDetails);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container h-screen mx-auto py-24 px-4 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-300">
        News Detail
      </h2>
      {newsItem && (
        <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto shadow-lg rounded-md bg-white p-6">
          <h3 className="text-2xl  text-blue-300 font-bold mb-4">
            {newsItem.title}
          </h3>
          <p className="text-gray-700 mb-6">{newsItem.content}</p>
          <p className="text-sm text-gray-500">
            {new Date(newsItem.date).toDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default News;

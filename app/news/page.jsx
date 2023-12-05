"use client"
import React, { useEffect, useState } from "react";
import { displayNews } from "../utils/displayData";


const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await displayNews();
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto py-24 px-4 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-300">News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((newsItem) => (
          <div key={newsItem.id} className="border border-gray-300 bg-white rounded-md p-6">
            <h3 className="text-2xl font-bold mb-4">{newsItem.title}</h3>
            <p className="text-gray-700 mb-6">{newsItem.content}</p>
            <p className="text-sm text-gray-500">{new Date(newsItem.date).toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

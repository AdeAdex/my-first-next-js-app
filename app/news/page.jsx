"use client";
import React, { useEffect, useState } from "react";
import { displayNews } from "../utils/displayData";
import Link from "next/link";

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await displayNews();
        // setNews(newsData);
        setNews(newsData.allNews);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto py-24 px-4 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-300">
        News List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((newsItem, index) => (
          <Link
            // href={`/news/${newsItem.title}`}
            href={`/news/[id]`}
            as={`/news/${encodeURIComponent(newsItem.id)}`}
            key={index}
            className="border text-blue-600 border-gray-300 bg-white rounded-md p-6"
          >
            <h3 className="text-2xl font-bold mb-4">{newsItem.title}</h3>
            <p className="text-gray-700 mb-6">{newsItem.content}</p>
            <p className="text-sm text-gray-500">
              {new Date(newsItem.date).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

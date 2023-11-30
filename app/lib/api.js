import newsData from "../data/news.json";
import usersData from "../data/users.json";

export const getNews = async () => {
  const newsItem = newsData.find((item) => item.id === parseInt(id, 10));
  return newsItem;
};

export const getUsers = async () => {
  const userItem = usersData.find((item) => item.id === parseInt(id, 10));
  return userItem;
};

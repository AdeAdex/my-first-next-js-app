// utils/displayData.js
import newsData from "../data/news.json";
import usersData from "../data/users.json";


export const displayNews = async () => {
  const news = await newsData;
  return news
};

export const displayUsers = async () => {
  const users = await usersData;
  return users
};

export default { displayNews, displayUsers };

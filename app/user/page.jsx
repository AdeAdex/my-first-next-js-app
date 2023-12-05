// app/user/page.jsx

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { displayUsers } from "../utils/displayData";
import useWindowSize from "../utils/useWindowSize";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();
  const isMobile = width <= 600;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const fetchedUsers = await displayUsers();
        setUsers(fetchedUsers.allUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto  py-24 px-4 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
            User List
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {users &&
              users.map((eachUser, index) => (
                <Link key={index} href={`/user/${eachUser.username}`}>
                  <div className="bg-white rounded-md shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="mb-2 text-lg font-semibold text-indigo-800">
                      {eachUser.name}
                    </div>
                    <div className="text-gray-600">{eachUser.email}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default UserPage;

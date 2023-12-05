// app/user/[username]/page.jsx

"use client";
import React, { useEffect, useState } from "react";
import { displayUsers } from "@/app/utils/displayData";
import { notFound } from "next/navigation";

export const dynamicParams = true;

const UserPage = ({ params }) => {
  const username = params.username;
  const [user, setUser] = useState(null);
  const [response, setResponse] = useState(true);

  const getUserDetails = async () => {
    const users = await displayUsers();
    const ourUser = users.allUsers.find((user) => user.username === username);
    return ourUser;
  };

  useEffect(() => {
    const fetchData = async () => {
      const userDetails = await getUserDetails();

      if (!userDetails) {
        setResponse(false);
      }
      if (response === false) {
        notFound();
      } else {
        setUser(userDetails);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="container w-full h-screen mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-300">
        User Details
      </h2>
      {user && (
        <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto shadow-lg rounded-md bg-white p-6">
          <h2 className="text-lg font-semibold mb-4">UserID: {user.id}</h2>
          <div className="flex flex-col mb-4">
            <span className="text-gray-600 mb-1">UserName:</span>
            <span className="text-indigo-800">{user.username}</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-gray-600 mb-1">Name:</span>
            <span className="text-indigo-800">{user.name}</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-gray-600 mb-1">Email:</span>
            <span className="text-indigo-800">{user.email}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;

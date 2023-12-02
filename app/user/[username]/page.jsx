// app/user/[username]/page.jsx

"use client";
import React, { useEffect, useState } from "react";
import { displayUsers } from "@/app/utils/displayData";
import { notFound } from "next/navigation";

export const dynamicParams = true;

const UserPage = ({ params }) => {
  const username = params.username;
  const [user, setUser] = useState(null);
  const [response, setResponse] = useState(true)

  const getUserDetails = async () => {
    const users = await displayUsers();
    const ourUser = users.allUsers.find((user) => user.username === username);
    return ourUser;
  };


  useEffect(() => {
    const fetchData = async () => {
      const userDetails = await getUserDetails();

      if (!userDetails) {
        setResponse(false)
      } 
      if (response === false) {
        notFound()
      } else {
        setUser(userDetails);
      }

    };

    

    fetchData();
  }, [username]);

  return (
    <div className="w-full h-screen">
      <h2 className="text-center my-12">User Details</h2>
      {user && (
        <div className="flex flex-col w-1/4 mx-auto shadow rounded-sm bg-blue-500 p-4">
          <h2 className="my-4">UserID: {user.id}</h2>
          <div className="flex gap-20">
            <span className="w-1/12">UserName:</span> {user.username}
          </div>
          <div className="flex gap-20">
            <span className="w-1/12">Name:</span> {user.name}
          </div>
          <div className="flex gap-20">
            <span className="w-1/12">Email:</span> {user.email}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;


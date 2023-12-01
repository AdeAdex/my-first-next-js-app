"use client"
import React, { useEffect, useState } from "react";
import { displayUsers } from "@/app/utils/displayData";

const UserPage = ({params}) => {
  const username = params.username

  const getUserDetails = async () => {
    const users = await displayUsers();
    const user = users.allUsers.find((user) => user.username === username);
    return user;
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(username)
    const fetchData = async () => {
      const userDetails = await getUserDetails();
      setUser(userDetails);
    };

    fetchData();
  }, [username]);

  return (
    <div className="w-full">
      <h2 className="text-center my-12">User Details</h2>
      {user && (
        <div className="flex flex-col w-1/4 mx-auto">
        <h2 className="my-4">UserID: {user.id}</h2>
          <div className="flex gap-20"><span className="w-1/12">UserName:</span> {user.username}</div>
          <div className="flex gap-20"><span className="w-1/12">Name:</span> {user.name}</div>
          <div className="flex gap-20"><span className="w-1/12">Email:</span> {user.email}</div>
        </div>
      )}
    </div>
  );
};

export default UserPage;

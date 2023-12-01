"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { displayUsers } from "../utils/displayData"


const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await displayUsers();
      setUsers(fetchedUsers.allUsers);
      console.log(users);
    };

    fetchData();
  }, [users]);

  return (
    <main>
      <h2 className="text-center my-10">User Details</h2>
      <div className="flex w-full justify-center">
      <div className="flex flex-wrap w-1/2">
      {users &&
        users.map((eachUser, index) => (
          <Link key={index} className="w-1/2 my-5" href={`/user/${eachUser.username}`}>
            <div className="">
              <div>{eachUser.id}</div>
              <div>{eachUser.name}</div>
              <div>{eachUser.email}</div>
            </div>
          </Link>
        ))}
      </div>
      
      </div>
      
    </main>
  );
};

export default UserPage;

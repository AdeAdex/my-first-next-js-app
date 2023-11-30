"use client";
import React, { useEffect, useState } from "react";
import { displayNews, displayUsers } from "./utils/displayData";
import Link from "next/link";

const LandingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await displayNews();
      const fetchedUsers = await displayUsers();
      setUsers(fetchedUsers);
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <h2 className="text-blue-200">Landing Page</h2>
      {users &&
        users.map((eachUser, index) => (
          <Link key={index} href={`/user/${eachUser.id}`}>
              <div>
                <div>{eachUser.id}</div>
                <div>{eachUser.name}</div>
                <div>{eachUser.email}</div>
              </div>
          </Link>
        ))}
    </main>
  );
};

export default LandingPage;

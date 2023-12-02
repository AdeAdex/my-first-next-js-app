"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { displayUsers } from "../utils/displayData";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
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
    <main>
      {loading ? (
        <Loading />
      ) : (
        <div>
        <h2 className="text-center my-10">Users</h2>
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
        </div>
     
      )}
    </main>
  );
};

export default UserPage;

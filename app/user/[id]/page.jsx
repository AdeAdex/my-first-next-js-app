"use client";
import React, { useEffect } from "react";

const UserPage = ({ params }) => {
  const id = params.id;
  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <div>{id}</div>
        <div>{id.name}</div>
        <div>{id.email}</div>
      </div>
    </div>
  );
};

export default UserPage;

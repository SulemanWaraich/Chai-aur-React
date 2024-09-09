import React from "react";
import { useParams } from "react-router-dom";

function User()
{
  const {userid} = useParams();
  return (
    <h1 className="bg-gray-600 p-4 text-white text-3xl text-center">User: {userid}</h1>
  )
}

export default User;
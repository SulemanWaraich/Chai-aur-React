import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github()
{
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((res)=> res.json())
  //   .then((data)=> {
  //     console.log(data);
  //     setData(data);
  //   })
  // },[])

  const data = useLoaderData();

  return (
    <div className="flex justify-center">
    <h1 className="text-white bg-gray-600 text-3xl">Github Followers: {data.followers}
    <img className='w-80' src={data.avatar_url} alt="" />
    </h1>
    </div>
  )
}

export default Github;

export const githubInfo = async () =>
{
   const url = await fetch('https://api.github.com/users/hiteshchoudhary')
   return url.json();
}
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" flex flex-col w-full h-full pt-[5rem] items-center justify-center text-center">
      <h1 className=" text-[3rem]">HOME Page</h1>
      <Link
        to="/getAll"
        className=" mb-[0.5rem] text-[1.3rem] mt-[3rem] py-2 rounded-full w-[15rem] border-[2px] border-black hover:bg-slate-300"
      >
        See all team members
      </Link>
      <h1>READ - using GET</h1>
      <Link
        to="/posts/"
        className=" mb-[0.5rem] text-[1.3rem] mt-[3rem] py-2 rounded-full w-[18rem] border-[2px] border-black hover:bg-slate-300"
      >
        Create a New Team Member
      </Link>
      <h1>CREATE - using POST</h1>
      <Link
        to="/patch/assignTask"
        className=" mb-[0.5rem] text-[1.3rem] mt-[3rem] py-2 rounded-full w-[10rem] border-[2px] border-black hover:bg-slate-300"
      >
        Assign a Task
      </Link>
      <h1>UPDATE - using PATCH</h1>
      <Link
        to="/delete"
        className=" mb-[0.5rem] text-[1.3rem] mt-[3rem] py-2 rounded-full w-[18rem] border-[2px] border-black hover:bg-slate-300"
      >
        Delete a Team Member
      </Link>
      <h1>DELETE - using DELETE</h1>
    </div>
  );
}

export default Home;

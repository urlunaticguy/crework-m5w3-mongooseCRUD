import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import GetAll from "./components/getAll/GetAll";
import AssignTask from "./components/assignTask/AssignTask";
import CreateNew from "./components/createNew/CreateNew";
import { Link } from "react-router-dom";
import Delete from "./components/delete/Delete";

function App() {
  return (
    <>
      <nav className=" w-full h-[3rem] bg-slate-300 text-[1.5rem] text-center flex justify-center">
        <Link to="/" className=" w-[6rem] hover:bg-slate-400">
          HOME
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<CreateNew />}></Route>
        <Route path="/getAll" element={<GetAll />}></Route>
        <Route path="/patch/assignTask" element={<AssignTask />}></Route>
        <Route path="/delete" element={<Delete />}></Route>
      </Routes>
    </>
  );
}

export default App;

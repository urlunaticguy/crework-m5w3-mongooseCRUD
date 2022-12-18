import { React, useRef } from "react";
import axios from "axios";
import GetAll from "../getAll/GetAll";

function AssignTask() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const sendAssignRequest = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:3000/patch/assignTask",
        { ID: ref1.current.value, Task: ref2.current.value }
      );
      console.log(response.data);
      window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
    ref1.current.value = "";
    ref2.current.value = "";
  };
  return (
    <div className=" w-full flex flex-col justify-center text-center pt-[10rem]">
      <form className=" flex flex-col gap-4 border-black border-[2px] py-4 mb-[5rem] justify-center items-center">
        <div className=" flex text-right gap-2">
          <label className=" w-[10rem] text-[1.5rem]">ID</label>
          <input
            ref={ref1}
            className=" px-2 border-black border-[2px] w-[22rem] text-[1.2rem]"
          />
        </div>
        <div className=" flex text-right gap-2">
          <label className=" w-[10rem] text-[1.5rem]">Task</label>
          <input
            ref={ref2}
            className=" px-2 border-black border-[2px] w-[22rem] text-[1.2rem]"
          />
        </div>
        <button
          className=" w-[10rem] bg-blue-500 hover:bg-blue-700 font-bold text-white p-4 rounded-full"
          onClick={() => {
            sendAssignRequest();
          }}
        >
          Assign Task
        </button>
      </form>
      <h1 className=" text-[1.8rem]">Current Data</h1>
      <GetAll />
    </div>
  );
}

export default AssignTask;

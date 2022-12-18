import { React, useRef } from "react";
import GetAll from "../getAll/GetAll";
import axios from "axios";

function Delete() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const deleteByID = async () => {
    const id = ref1.current.value;
    try {
      const response = await axios.delete(
        "http://localhost:3000/delete/byID/" + id
      );
      console.log(response.data);
      window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
    ref1.current.value = "";
  };

  const deleteByName = async () => {
    const name = ref2.current.value;
    try {
      const response = await axios.delete(
        "http://localhost:3000/delete/byName/" + name
      );
      console.log(response.data);
      window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
    ref2.current.value = "";
  };

  return (
    <div className="w-full flex flex-col justify-center text-center items-center pt-[10rem]">
      <form className=" flex justify-center text-center w-[80%]">
        <label className=" w-[5rem] text-[1.5rem] bg-green-300 p-2 rounded-l-full">
          ID
        </label>
        <input
          ref={ref1}
          className=" w-[26.5rem] text-[1.25rem] bg-green-200 p-2"
        />
        <button
          onClick={deleteByID}
          className=" text-[1.5rem] bg-green-300 py-2 px-4 rounded-r-full"
        >
          Delete by ID
        </button>
      </form>
      <form className=" flex justify-center text-center w-[80%] mt-[2rem]">
        <label className=" w-[6rem] text-[1.5rem] bg-green-300 py-2 px-4 rounded-l-full">
          Name
        </label>
        <input
          ref={ref2}
          className=" w-[25rem] text-[1.25rem] bg-green-200 p-2"
        />
        <button
          onClick={() => {
            deleteByName();
          }}
          className=" text-[1.5rem] bg-green-300 py-2 px-4 rounded-r-full"
        >
          Delete by Name
        </button>
      </form>
      <div className=" w-full mt-[3rem]">
        <h1 className=" text-[2rem]">Current Data</h1>
        <GetAll />
      </div>
    </div>
  );
}

export default Delete;

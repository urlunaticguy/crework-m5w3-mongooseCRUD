import { React, useEffect, useState } from "react";
import axios from "axios";

function GetAll() {
  const [first, setfirst] = useState([]);
  const sendGetRequest = async () => {
    try {
      const response = await axios.get("http://localhost:3000/get/getAll");
      setfirst(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <div>
      <table className=" w-full text-center">
        <thead>
          <tr className=" text-[1.3rem]">
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Tasks Assigned</th>
            <th>Tasks Completed</th>
            <th>Tasks Remaining</th>
          </tr>
        </thead>
        <tbody>
          {first.map((data) => (
            <tr key={data._id} className=" text-[1.1rem]">
              <td>{data._id}</td>
              <td>{data.name}</td>
              <td>{data.role}</td>
              <td>{data.tasksAssignedCount}</td>
              <td>{data.tasksCompletedCount}</td>
              <td>{data.tasksRemainingCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAll;

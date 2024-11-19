import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const JadwalDashboard = () => {
  return (
    <div className="flex border p-3 rounded-xl bg-gray-100 my-4 justify-between hover:bg-gray-200">
      <div className="flex gap-3 ">
        <div className="align-middle my-auto">
          <div className="w-4 h-4 rounded-full bg-blue-900"></div>
        </div>
        <div className="flex flex-col">
          <h1>Pemrograman Web</h1> <br />
          <p className="text-gray-600">Pratyaksa Ocsa Saian</p>
        </div>
      </div>
      <div className="align-middle my-auto">
          <h1 >
            <ChevronRightIcon className="h-5 w-5 text-gray-600 font-extrabold" />
          </h1>
        </div>
    </div>
  );
};

export default JadwalDashboard;

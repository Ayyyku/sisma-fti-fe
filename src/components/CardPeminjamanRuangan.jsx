import React from "react";
import { UserIcon, ClockIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";


const CardPeminjamanRuangan = () => {
  return (
    <div className="rounded-lg bg-white p-3">
      <h1 className="font-bold">Status Peminjaman ruangan</h1>
      <p className="text-sm text-gray-700 mt-3">FTI469</p>
      <span className="flex align-middle self-center mt-12 gap-2">
        <UserIcon className="h-5 w-5 text text-gray-600" />
        <p className="text-gray-600">sarpras</p>
      </span>
      <span className="flex align-middle self-center mt-6 gap-2">
        <ClockIcon className="h-5 w-5 text text-gray-600" />
        <p className="text-gray-600">11.00 - 13.00</p>
      </span>

      <div className="bg-light-blue-800 w-3/6 rounded-md mt-3 flex justify-between align-middle gap-3 px-2 pt-1 ">
        <p className="text-center text-white">Menuggu</p>
        <ChatBubbleBottomCenterIcon className="h-5 w-5 text-white my-auto" />
      </div>
    </div>
  );
};

export default CardPeminjamanRuangan;

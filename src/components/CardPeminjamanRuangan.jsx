import React from "react";
import { UserIcon, ClockIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";

const CardPeminjamanRuangan = ({ ruangan }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'waiting':
        return 'bg-orange-500';
      case 'approve':
        return 'bg-green-500';
      case 'decline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-3 bg-white rounded-lg">
      <h1 className="font-bold">Informasi</h1>
      <p className="mt-3 text-sm text-gray-700">{ruangan.namaRuangan}</p>
      <span className="flex self-center gap-2 mt-12 align-middle">
        <UserIcon className="w-5 h-5 text-gray-600 text" />
        <p className="text-gray-600">{ruangan.name}</p>
      </span>
      <span className="flex self-center gap-2 mt-6 align-middle">
        <ClockIcon className="w-5 h-5 text-gray-600 text" />
        <p className="text-gray-600">{new Date(ruangan.time).toLocaleString()}</p>
      </span>

      <div className={`flex justify-between w-3/6 gap-3 px-2 pt-1 mt-3 align-middle rounded-md ${getStatusColor(ruangan.status)}`}>
        <p className="text-center text-white">{ruangan.status}</p>
        <ChatBubbleBottomCenterIcon className="w-5 h-5 my-auto text-white" />
      </div>
    </div>
  );
};

export default CardPeminjamanRuangan;

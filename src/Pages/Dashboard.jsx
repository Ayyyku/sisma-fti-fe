import React from "react";
import Layouts from "./Layouts";
import Hero from "../assets/hero.jpg";
import { UserIcon, ClockIcon } from "@heroicons/react/24/solid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const Dashboard = () => {
  return (
    <Layouts>
      <div className="flex h-screen">
        <div className="bg-gray-100 h-screen pt-12 ">
          <p className="pl-5  text-3xl">Selamat Datang, user</p>
          <p className="pl-5 mb-3 text-gray-500">semoga harimu menyenangkan</p>
          <div
            className="bg-local w-[1015px] h-[460px] bg-gradient-to-t from-black to-black bg-cover bg-center flex items-center justify-center back"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Hero})`,
            }}
          >
            <div>
              <h1 className="text-center text-3xl text-white font-bold">
                SISTEM MANAJEMEN FAKULTAS <br />
                TEKNOLOGI INFORMASI
              </h1>
              <p className="text-center text-white">
                Media Sistem Manajemen Fakultas Teknologi Informasi
              </p>
            </div>
          </div>

          <div className="w-5/6 mx-auto mt-5">
            <div className="flex justify-between">
              <p className="text-gray-700 font-bold ">Interaksi</p>
              <p className="text-blue-700 font-bold ">Lihat Semua</p>
            </div>
            <div className="flex gap-3 mt-5">
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
              </div>
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
              </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;

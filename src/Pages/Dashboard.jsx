import React from "react";
import Layouts from "./Layouts";
import Hero from "../assets/hero.jpg";
import { BellIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import CardPeminjamanRuangan from "../components/CardPeminjamanRuangan";
import JadwalDashboard from "../components/JadwalDashboard";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/me");
        setUserData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Gagal mengambil data pengguna");
      }
    };

    fetchUserData();
  }, []);
  return (
    <Layouts>
      <div className="flex h-screen">
        <div className="bg-gray-100 h-screen pt-12 ">
          <p className="pl-5  text-3xl">
            {error && <p className="text-red-500">{error}</p>}
            {userData ? (
              <div>
                <h1>Username: {userData.username}</h1>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </p>
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
              {[...Array(3)].map((_, i) => (
                <CardPeminjamanRuangan key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="ml-12 w-2/3">
          <div className="flex gap-4 justify-end items-center mt-5">
            <BellIcon className="h-8 w-8 text-gray-600" />
            <img
              src="https://i.pinimg.com/564x/8d/bb/3e/8dbb3ea9dcf5bb51ccc295b05081a442.jpg"
              alt="img profile"
              className="w-16 rounded-full"
            />
          </div>
          <div className="mt-5">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              className="bg-gray-700 shadow-lg rounded-lg p-4"
            />
            <div>

              <h1 className="font-bold mt-10 text-2xl mb-4">Jadwal</h1>
              <JadwalDashboard />
              {[...Array(3)].map((_, i) => (
                <JadwalDashboard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;

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
  const [ruanganData, setRuanganData] = useState([]);
  const [ruanganError, setRuanganError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true
        });
        setUserData(response.data.user);
      } catch (err) {
        if (err.response?.status === 401) {
          window.location.href = '/';
        }
        setError("Gagal mengambil data pengguna");
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchRuanganData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/ruangan", {
          withCredentials: true
        });
        setRuanganData(response.data);
      } catch (err) {
        setRuanganError("Gagal mengambil data ruangan");
      }
    };

    fetchRuanganData();
  }, []);

  return (
    <Layouts>
      <div className="flex h-screen">
        <div className="h-screen pt-12 bg-gray-100 ">
          <p className="pl-5 text-3xl">
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
              <h1 className="text-3xl font-bold text-center text-white">
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
              <p className="font-bold text-gray-700 ">Interaksi</p>
              <p className="font-bold text-blue-700 ">Lihat Semua</p>
            </div>
            <div className="flex gap-3 mt-5">
              {ruanganError && <p className="text-red-500">{ruanganError}</p>}
              {ruanganData.length > 0 ? (
                ruanganData.map((ruangan, i) => (
                  <CardPeminjamanRuangan key={i} ruangan={ruangan} />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-2/3 ml-12">
          <div className="flex items-center justify-end gap-4 mt-5">
            <BellIcon className="w-8 h-8 text-gray-600" />
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
              className="p-4 bg-gray-700 rounded-lg shadow-lg"
            />
            <div>

              <h1 className="mt-10 mb-4 text-2xl font-bold">Jadwal</h1>
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

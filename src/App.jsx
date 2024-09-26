import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './Pages/Dashboard';
import Jadwal from './Pages/Jadwal';
import Peminjaman from './Pages/Peminjaman';
import AsistenDosen from './Pages/AsistenDosen';
import Forum from './Pages/Forum';
import Pengaturan from './Pages/Pengaturan';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/peminjaman" element={<Peminjaman />} />
          <Route path="/asisten-dosen" element={<AsistenDosen />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/pengaturan" element={<Pengaturan />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
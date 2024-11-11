import React from 'react'
import Layouts from './Layouts'
import Hero from "../assets/hero.jpg";
import { BellIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import CardPeminjamanRuangan from "../components/CardPeminjamanRuangan";
import JadwalDashboard from "../components/JadwalDashboard";
import Form from '../components/Form';
const AsistenDosen = () => {
  return (
    <Layouts>
       <Form/>
    </Layouts>
  )
}

export default AsistenDosen
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  Squares2X2Icon as Square,
  CalendarIcon as Calendar,
  UserCircleIcon,
  UserGroupIcon,
  InboxIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <NavLink to={"/dashboard"}>
          <ListItem className="hover:bg-blue-800 hover:text-white">
            <ListItemPrefix>
              <Square className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </NavLink>
        <NavLink to={"/jadwal"}>
          <ListItem className="hover:bg-blue-800 hover:text-white">
            <ListItemPrefix>
              <Calendar className="h-5 w-5" />
            </ListItemPrefix>
            Jadwal
          </ListItem>
        </NavLink>
        <NavLink to={"/peminjaman"}>
          <ListItem className="hover:bg-blue-800 hover:text-white">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Peminjaman
          </ListItem>
        </NavLink>
        <NavLink to={"/asisten-dosen"}>
          <ListItem className="hover:bg-blue-800 hover:text-white">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Asisten Dosen
          </ListItem>
        </NavLink>
        <NavLink to={"/forum"}>
          <ListItem className="hover:bg-blue-800 hover:text-white">
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            Forum
          </ListItem>
        </NavLink>
        <NavLink to={"/pengaturan"}>
          <ListItem className="hover:bg-blue-800 hover:text-white">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Pengaturan
          </ListItem>
        </NavLink>
      </List>
    </Card>
  );
};

export default Dashboard;

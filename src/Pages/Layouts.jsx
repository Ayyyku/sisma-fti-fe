import React from "react";
import Dashboard from "../components/Dashboard";

const Layouts = ({ children }) => {
  return (
    <React.Fragment>
      <div className="flex">
        <Dashboard />
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layouts;

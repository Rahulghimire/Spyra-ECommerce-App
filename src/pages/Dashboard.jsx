import React, { useState } from "react";
import "./Dashboard.css";
import Sidemenu from "../Dashboard/Sidemenu";
import Header from "../Dashboard/Header";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid dashboard_container">
      <div className="row">
        <div className="d-none d-md-block col-2 col-md-2 col-lg-3 sidebar p-1 p-md-2 p-lg-4">
          <Sidemenu />
        </div>
        <div className="col-12 col-md-9 card_outer-container">
          <div className="row">
            <Header />
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <div className="container-fluid dashboard_container">
<div className="row">
  <div className="d-none d-md-block col-2 col-md-2 col-lg-3 sidebar p-1 p-md-2 p-lg-4">
    <Sidemenu />
  </div>
  <div className="col-12 col-md-9 card_outer-container">
    <div className="row">
      <Header />
    </div>
  </div>
</div>
</div> */
}

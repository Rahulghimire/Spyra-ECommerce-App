import React, { useState } from "react";
import "./Dashboard.css";
import Sidemenu from "../Dashboard/Sidemenu";
import Header from "../Dashboard/Header";

const Dashboard = () => {
  return (
    <div className="container-fluid dashboard_container">
      <div className="row">
        <div className="col-2 col-md-2 col-lg-3 sidebar p-1 p-md-4">
          <Sidemenu />
        </div>
        <div className="col-9 card_outer-container">
          <div className="row">
            <Header />
            <div className="col d-flex flex-row card_container justify-content-between gap-1">
              <div className="col-3 card">component</div>
              <div className="col-3 card">Hello</div>
              <div className="col-3 card">Hello</div>
              <div className="col-3 card">Hello</div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">Hello</div>
            <div className="col-6">World</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import "./Dashboard.css";
import Sidemenu from "../Dashboard/Sidemenu";
import Header from "../Dashboard/Header";
import Card from "../components/Card";
import Tables from "../Dashboard/Tables";
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
            <div className="row m-0">
              <div className="p-0 col d-flex flex-row card_container justify-content-between mt-3 flex-wrap">
                <Card backgroundColor="#e9faf5" borderColor="#23ca99" />
                <Card backgroundColor="#fff0f6" borderColor="#ff78ae" />
                <Card backgroundColor="#eff0fe" borderColor="#5f63f2" />
                <Card backgroundColor="#fff4e7" borderColor="#fb9a2c" />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-12">
              <div>
                <Tables />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div>
                <Tables />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

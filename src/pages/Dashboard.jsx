import React, { useState } from "react";
import "./Dashboard.css";
import Sidemenu from "../Dashboard/Sidemenu";
import Header from "../Dashboard/Header";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import Card from "../components/Card";

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

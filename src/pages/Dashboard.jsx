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
        <div className="d-none d-md-block col-2 col-md-2 col-lg-3 sidebar p-1 p-md-2 p-lg-4">
          <Sidemenu />
        </div>
        <div className="col-12 col-md-9 card_outer-container">
          <div className="row">
            <Header />
            <div className="row m-0">
              <div className="p-0 col d-flex flex-row card_container justify-content-between mt-3 flex-wrap">
                <Card
                  backgroundColor="#e9faf5"
                  borderColor="#23ca99"
                  title="Total Order"
                />
                <Card
                  backgroundColor="#fff0f6"
                  borderColor="#ff78ae"
                  title="Total Product"
                />
                <Card
                  backgroundColor="#eff0fe"
                  borderColor="#5f63f2"
                  title="Total Customer"
                />
                <Card
                  backgroundColor="#fff4e7"
                  borderColor="#fb9a2c"
                  title="Total Blog"
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-12">
              <div>
                <Tables
                  title="Top New Order"
                  borderTop="0.25rem solid #23ca99"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div>
                <Tables
                  title="Top New Customer"
                  borderTop="0.25rem solid #ff6aa6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

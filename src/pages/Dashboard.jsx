import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import { MdWbSunny, MdNightsStay } from "react-icons/md";
import { MdEqualizer, MdSettings, MdExitToApp } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaBars } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import nepalFlagIcon from "../assets/nepal-flag-icon.svg";
import { MdMessage } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import Avatar from "react-avatar";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

  return (
    <div className="container-fluid dashboard_container">
      <div className="row">
        <div className="col-2 col-md-2 col-lg-3 sidebar p-1 p-md-4">
          <div className="d-flex flex-column">
            <div>
              <Form>
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Search Order..."
                    className="mr-sm-2"
                    value={searchText}
                    onChange={handleInputChange}
                  />
                  <InputGroup.Text onClick={handleSearch}>
                    <BsSearch />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </div>
            <div className="" style={{ padding: "1rem 0 0 0" }}>
              <p className="text-uppercase analytics_text">Analytics</p>
            </div>
            <div className="d-flex flex-column justify-content-between gap-5">
              <div>
                <div className="dashboard_links-container">
                  <NavLink
                    to="/dashboard"
                    className="text-decoration-none dashboard_links anchor-tag active-link"
                    exact
                  >
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                      className="icon"
                    />
                    Dashboard
                  </NavLink>
                </div>
                <div className="dashboard_links-container">
                  <NavLink
                    to="/product-management"
                    className="text-decoration-none dashboard_links anchor-tag "
                    exact
                  >
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                      className="icon"
                    />
                    Product Management
                  </NavLink>
                </div>
                <div className="dashboard_links-container">
                  <NavLink
                    to="/catalogue-management"
                    className="text-decoration-none dashboard_links anchor-tag"
                    exact
                  >
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                      className="icon"
                    />
                    Catalogue Management
                  </NavLink>
                </div>
                <div className="dashboard_links-container">
                  <NavLink
                    to="/user-management"
                    className="text-decoration-none dashboard_links anchor-tag"
                    exact
                  >
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                      className="icon"
                    />
                    User Management
                  </NavLink>
                </div>
                <div className="dashboard_links-container">
                  <NavLink
                    to="/order-management"
                    className="text-decoration-none dashboard_links anchor-tag"
                    exact
                  >
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                      className="icon"
                    />
                    Order Management
                  </NavLink>
                </div>
                <div className="dashboard_links-container">
                  <NavLink
                    to="/payment-invoice"
                    className="text-decoration-none dashboard_links anchor-tag"
                    exact
                  >
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                      className="icon"
                    />
                    Payment & Invoice
                  </NavLink>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="">
                  <div className="dashboard_links-bottom">
                    <MdEqualizer size={12} />
                    <span className="ms-2">Reports</span>
                  </div>
                </div>
                <div>
                  <p className="dashboard_links-bottom">
                    <MdSettings size={12} />
                    <span className="ms-2">Help & Support</span>
                  </p>
                </div>
                <div>
                  <p className="dashboard_links-bottom">
                    <MdSettings size={12} />
                    <span className="ms-2">Settings</span>
                  </p>
                </div>
                <div>
                  <p className="dashboard_links-bottom">
                    <MdExitToApp size={12} />
                    <span className="ms-2">Logout</span>
                  </p>
                </div>
                <div className="d-flex flex-row  justify-content-between toggler_bar">
                  <div className="toggle_text">
                    <button className="toggle_button">
                      <MdWbSunny size={12} />
                      <span className="toggle_text ms-2">Light mode</span>
                    </button>
                  </div>
                  <div className="toggle_text">
                    <button className="toggle_button toggle_button-2">
                      <MdNightsStay size={12} />
                      <span className="toggle_text ms-2">Dark mode</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9 card_outer-container">
          <div className="row">
            <div className="col-12 header-container">
              <div className="d-flex flex-row justify-content-between">
                <div className="header-container--left d-flex flex-row align-items-center">
                  <div>
                    <FaBars />
                  </div>
                  <div>
                    <FaGlobe />
                  </div>
                  <div>
                    <span>Sabin G.</span>
                  </div>
                </div>
                <div className="header-container--right d-flex align-items-center">
                  <div className="me-2 icon-background">
                    <img
                      src={nepalFlagIcon}
                      alt="nepal-flag-icon"
                      width={25}
                      height={20}
                    />
                  </div>
                  <div className="me-2 icon-background">
                    <MdMessage size={20} />
                  </div>
                  <div className="me-3 icon-background">
                    <MdNotifications size={20} />
                  </div>
                  <div>
                    <Avatar githubHandle="sitebase" size={25} round="20px" />
                  </div>
                </div>
              </div>
            </div>
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

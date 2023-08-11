import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "../../pages/Dashboard.css";
import { NavLink } from "react-router-dom";
import { MdWbSunny, MdNightsStay } from "react-icons/md";
import { MdEqualizer, MdSettings, MdExitToApp } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Sidemenu = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };
  return (
    <>
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
                className="text-decoration-none dashboard_links anchor-tag active-link gap-1"
                exact
              >
                <RxDashboard />
                <div className="ms-2">Dashboard</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container">
              <NavLink
                to="/product-management"
                className="text-decoration-none dashboard_links anchor-tag "
                exact
              >
                <RxDashboard className="icon" />
                <div className="ms-2">Product Management</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container">
              <NavLink
                to="/catalogue-management"
                className="text-decoration-none dashboard_links anchor-tag"
                exact
              >
                <FaBook className="icon" />
                <div className="ms-2">Catalogue Management</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container">
              <NavLink
                to="/user-management"
                className="text-decoration-none dashboard_links anchor-tag"
                exact
              >
                <FaUser className="icon" />
                <div className="ms-2"> User Management</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container">
              <NavLink
                to="/order-management"
                className="text-decoration-none dashboard_links anchor-tag"
                exact
              >
                <FaShoppingCart className="icon" />
                <div className="ms-2"> Order Management</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container">
              <NavLink
                to="/payment-invoice"
                className="text-decoration-none dashboard_links anchor-tag"
                exact
              >
                <FaMoneyBillWave className="icon" />
                <div className="ms-2"> Payment & Invoice</div>
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
    </>
  );
};

export default Sidemenu;

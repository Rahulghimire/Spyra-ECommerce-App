import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import { MdWbSunny, MdNightsStay } from "react-icons/md";
import { MdEqualizer, MdSettings, MdExitToApp } from "react-icons/md";

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
              <div className="">
                <div className="">
                  <div className="dashboard_links d-flex align-items-center">
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                    />
                    <Link to="#" className="text-decoration-none anchor-tag">
                      Dashboard
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="dashboard_links d-flex align-items-center">
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                    />
                    <Link to="#" className="text-decoration-none anchor-tag">
                      Product Management
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="dashboard_links  d-flex align-items-center">
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                    />
                    <Link to="#" className="text-decoration-none anchor-tag">
                      Catalogue Management
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="dashboard_links  d-flex align-items-center">
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                    />
                    <Link to="#" className="text-decoration-none anchor-tag">
                      User Management
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="dashboard_links  d-flex align-items-center">
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                    />
                    <Link to="#" className="text-decoration-none anchor-tag">
                      Order Management
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="dashboard_links  d-flex align-items-center">
                    <img
                      src={menuIcon}
                      width={13}
                      height={12}
                      style={{ marginRight: "0.7rem" }}
                    />
                    <Link to="#" className="text-decoration-none anchor-tag">
                      Payment & Invoice
                    </Link>
                  </p>
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
      </div>
    </div>
  );
};

export default Dashboard;

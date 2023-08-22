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
                to="/dashboard/home"
                className="text-decoration-none dashboard_links anchor-tag gap-1"
                exact="true"
                activeClassName="active"
              >
                <RxDashboard />
                <div className="ms-2">Dashboard</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container position-relative">
              <div className="dropdown">
                <NavLink
                  to="/dashboard/product-management"
                  className="text-decoration-none dashboard_links anchor-tag dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  activeClassName="active"
                  exact="true"
                >
                  <RxDashboard className="icon" />
                  <div className="ms-2">Product Management</div>
                </NavLink>
                <ul
                  className="dropdown-menu position-relative"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/manage-product">
                      Manage Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/dashboard/addproduct"
                    >
                      Add Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/review-product">
                      Review Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/bulk-edit-product">
                      Bulk Add / Edit Product
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dashboard_links-container position-relative">
              <NavLink
                to="/catalogue-management"
                className="text-decoration-none dashboard_links anchor-tag"
                exact="true"
                activeClassName="active"
              >
                <FaBook className="icon" />
                <div className="ms-2">Catalogue Management</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container">
              <NavLink
                to="/user-management"
                className="text-decoration-none dashboard_links anchor-tag"
                exact="true"
              >
                <FaUser className="icon" />
                <div className="ms-2"> User Management</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container">
              <NavLink
                to="/order-management"
                className="text-decoration-none dashboard_links anchor-tag"
                exact="true"
              >
                <FaShoppingCart className="icon" />
                <div className="ms-2"> Order Management</div>
              </NavLink>
            </div>
            <div className="dashboard_links-container">
              <NavLink
                to="/payment-invoice"
                className="text-decoration-none dashboard_links anchor-tag"
                exact="true"
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
                <button className="toggle_button-light">
                  <MdWbSunny size={12} />
                  <span className="toggle_text ms-2">Light mode</span>
                </button>
              </div>
              <div className="toggle_text">
                <button className="toggle_button-dark">
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

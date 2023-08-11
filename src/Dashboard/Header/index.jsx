import React from "react";
import "../../pages/Dashboard.css";
import { FaBars } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdMessage, MdNotifications } from "react-icons/md";
import Avatar from "react-avatar";
import nepalFlagIcon from "../../assets/nepal-flag-icon.svg";

const Header = () => {
  return (
    <>
      <div className="col-12 header-container">
        <div className="d-flex flex-row justify-content-between">
          <div className="header-container--left d-flex flex-row align-items-center">
            <div>
              <FaBars size={20} />
            </div>
            <div
              className="ms-3"
              style={{
                borderRadius: "1.5rem",
                backgroundColor: "#ebeef6",
                color: "#000",
                padding: "0.4rem",
              }}
            >
              <FaGlobe style={{ color: "#6bb8ff" }} size={15} />
            </div>
            <div className="ms-3">
              <span style={{ color: "#626782", fontWeight: "400" }}>
                Sabin G.
              </span>
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
              <Avatar githubHandle="sitebase" size={30} round="20px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

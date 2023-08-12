import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Card = ({ borderColor, backgroundColor }) => {
  return (
    <>
      <div className="card-outer">
        <div className="card">
          <div className="d-flex flex-row justify-content-between align-items-center p-2">
            <div className="d-flex flex-row align-items-center">
              <div
                className="icon-background ms-3 p-2"
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#e9faf5",
                }}
              >
                <FaShoppingCart className="icon" size={15} />
              </div>
              <div>
                <span
                  className="ms-2"
                  style={{ color: "#81899d", fontSize: "0.7rem" }}
                >
                  Total Order
                </span>
              </div>
            </div>
            <div>
              <span
                className="ms-5"
                style={{ fontWeight: "800", fontSize: "0.7rem" }}
              >
                63
              </span>
              <Link
                className="text-decoration-none anchor-tag"
                style={{ color: "#000" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical ms-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="card-graph m-0 p-0">
            <Chart
              borderColor={borderColor}
              backgroundColor={backgroundColor}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

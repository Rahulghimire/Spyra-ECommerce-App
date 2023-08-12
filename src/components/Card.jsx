import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Chart from "./Chart";
import CardLogo from "./CardLogo";

const Card = ({ borderColor, backgroundColor, title }) => {
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
                  backgroundColor: backgroundColor,
                }}
              >
                <FaShoppingCart
                  size={15}
                  style={{
                    color: borderColor,
                  }}
                />
              </div>
              <div>
                <span
                  className="ms-2"
                  style={{ color: "#81899d", fontSize: "0.7rem" }}
                >
                  {title}
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
              <CardLogo />
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

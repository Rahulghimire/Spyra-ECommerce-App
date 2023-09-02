import React from "react";
import Card from "../components/Card";
import Tables from "../Dashboard/Tables";

const DashbaordContent = () => {
  return (
    <>
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
    </>
  );
};

export default DashbaordContent;

import React from "react";
import Sidemenu from "../../Dashboard/Sidemenu";
import Header from "../../Dashboard/Header";

const AddProduct = () => {
  return (
    <div className="container-fluid dashboard_container">
      <div className="row">
        <div className="d-none d-md-block col-2 col-md-2 col-lg-3 sidebar p-1 p-md-2 p-lg-4">
          <Sidemenu />
        </div>
        <div className="col-12 col-md-9 card_outer-container">
          <div className="row">
            <Header />
            <div>
              <div className="add-product-header">
                <h1 className="m-0">Product Management</h1>
                <span>Add products</span>
              </div>
              <div className="row">
                <div className="col d-flex flex-row flex-wrap">
                  <div className="col-md-3">Basic information</div>
                  <div className="col-md-3">Brand</div>
                  <div className="col-md-3">Discount type</div>
                  <div className="col-md-3">Button</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

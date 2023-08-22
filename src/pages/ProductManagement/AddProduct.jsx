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
                <h1 className="m-0 pt-3" style={{ fontSize: "1.2rem" }}>
                  Product Management
                </h1>
                <p
                  className="mt-2"
                  style={{ color: "#888888", fontSize: "0.8rem" }}
                >
                  Add products
                </p>
              </div>
              <div className="row">
                <div className="col d-flex flex-row flex-wrap justify-content-between">
                  <div
                    className="col-md-3 p-3"
                    style={{
                      color: "#606060",
                      boxShadow: "5px 5px 3px #f8f8f8",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontWeight: "600",
                    }}
                  >
                    <div>
                      <p className="add-product-text">Basic Information</p>
                    </div>
                    <div>
                      <p
                        className="add-product-text"
                        style={{ fontWeight: "700" }}
                      >
                        Product Images
                      </p>
                      <div className="d-flex flex-row justify-content-between">
                        <div class="file-upload">
                          <label for="file-input" class="file-label">
                            <span class="button-text">+</span>
                          </label>
                          <input type="file" id="file-input" class="hidden" />
                        </div>
                        <div class="file-upload">
                          <label for="file-input" class="file-label">
                            <span class="button-text">+</span>
                          </label>
                          <input type="file" id="file-input" class="hidden" />
                        </div>
                        <div class="file-upload">
                          <label for="file-input" class="file-label">
                            <span class="button-text">+</span>
                          </label>
                          <input type="file" id="file-input" class="hidden" />
                        </div>
                        <div class="file-upload">
                          <label for="file-input" class="file-label">
                            <span class="button-text">+</span>
                          </label>
                          <input type="file" id="file-input" class="hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3" style={{ color: "#fff" }}>
                    Brand
                  </div>
                  <div className="col-md-3" style={{ color: "#fff" }}>
                    Discount type
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex flex-column gap-3">
                      <div>
                        <button
                          className=""
                          style={{
                            backgroundColor: "#20c997",
                            border: "transparent",
                            color: "#fff",
                            borderRadius: "6px",
                            padding: "0.5rem 3.3rem",
                          }}
                          onClick={{}}
                        >
                          ADD
                        </button>
                      </div>
                      <div>
                        <button
                          className=""
                          style={{
                            backgroundColor: "#809fb8",
                            padding: "0.5rem 3.3rem",
                            border: "transparent",
                            color: "#fff",
                            borderRadius: "6px",
                          }}
                        >
                          Clear
                        </button>
                      </div>
                    </div>
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

export default AddProduct;

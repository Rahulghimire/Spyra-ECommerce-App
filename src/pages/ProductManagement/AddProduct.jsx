import React, { useState } from "react";
import Sidemenu from "../../Dashboard/Sidemenu";
import Header from "../../Dashboard/Header";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handelFileSelect = (e) => {
    console.log(e.target.files[0].name);
    setSelectedFile(e.target.files[0].name);
  };

  return (
    <div>
      <div className="add-product-header">
        <h1 className="m-0 pt-3" style={{ fontSize: "1.2rem" }}>
          Product Management
        </h1>
        <p className="mt-2" style={{ color: "#888888", fontSize: "0.8rem" }}>
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
              <p className="add-product-text" style={{ fontWeight: "700" }}>
                Product Images
              </p>
              <div className="d-flex flex-row justify-content-between">
                <div class="file-upload">
                  <label for="file-input" class="file-label">
                    <span class="button-text">+</span>
                  </label>
                  <input
                    type="file"
                    id="file-input"
                    class="hidden"
                    onChange={handelFileSelect}
                  />
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
              <div className="d-flex flex-column">
                <div className="mt-4">
                  <p className="add-product-text" style={{ fontWeight: "700" }}>
                    Product Information
                  </p>
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Name</div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Username"
                  />
                </div>
                <InputGroup className="mb-3">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>
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
  );
};

export default AddProduct;

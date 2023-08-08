import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "../index.css";
import Form from "react-bootstrap/Form";
import { Button, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../schemas";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    country_code: "",
    email: "",
    password: "",
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        console.log("From values::", values);
        action.resetForm();
      },
    });

  return (
    <section className="login-container">
      <div className="row m-0 p-0">
        <div className="col-12 p-0 col-md-6 d-flex flex-column align-items-center justify-content-center login-container--left">
          <div className="text-center py-1">
            <p className="header_text-one m-0">Welcome to</p>
            <p className="header_text-two">
              SPYRA <span className="header_text-three">Commerce</span>
            </p>
          </div>
          <div>
            <Form className="login-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="Form.ControlInput1">
                <Form.Label>Enter your company code </Form.Label>
                <Form.Control
                  type="number"
                  name="country_code"
                  placeholder="Enter company code"
                  style={{ minWidth: "17rem" }}
                  min={0}
                  autoComplete="off"
                  value={values.country_code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.country_code && touched.country_code ? (
                  <p className="font-weight-bold text-danger">
                    {errors.country_code}
                  </p>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-4" controlId="Form.ControlInput2">
                <Form.Label>Enter your username or email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Username or email address"
                  style={{ minWidth: "17rem" }}
                  value={values.email}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="font-weight-bold text-danger">{errors.email}</p>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter your password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    style={{ borderRight: "none", minWidth: "17rem" }}
                    value={values.password}
                    autoComplete="off"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button
                    className="eye-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
                <div>
                  {errors.password && touched.password ? (
                    <p className="font-weight-bold text-danger">
                      {errors.password}
                    </p>
                  ) : null}
                </div>
                <div className="my-1 d-flex flex-row w-100 justify-content-end">
                  <p style={{ color: "#de5384", fontWeight: "700" }}>
                    <Link
                      to="/forgot-password"
                      className="text-decoration-none"
                      style={{ color: "#de5384" }}
                    >
                      Forgot Password
                    </Link>
                  </p>
                </div>
              </Form.Group>
              <Form.Group>
                <button className="signIn-button mb-2" type="submit">
                  Sign In
                </button>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col-12 col-md-6  d-none d-md-flex flex-column align-items-center justify-content-center login-container--right">
          <div className="login_backgroud-image">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

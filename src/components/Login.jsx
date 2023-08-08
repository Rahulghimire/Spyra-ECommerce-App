import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import "../index.css";
import Form from "react-bootstrap/Form";
import { Button, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!companyCode.trim()) {
      alert("Please enter a valid country code.");
      return;
    }

    if (!userName.trim()) {
      alert("Please enter a valid username or email address.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter a valid password.");
      return;
    }

    const body = {
      userName,
      password,
      companyCode,
    };

    console.log(body);

    // axios
    //   .post(`${API_BASE_URL}/Auth/signin`, body)
    //   .then((res) => {
    //     const data = res.data;

    //     dispatch(
    //       userLogin({ user_id: data.data.id, user_name: data.data.userName })
    //     );

    //     navigate("/");
    //   })
    //   .catch((e) => {
    //     alert("Something went wrong.");
    //   });

    navigate("/home");
  };

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
            <Form className="login-form">
              <Form.Group className="mb-4" controlId="Form.ControlInput1">
                <Form.Label>Enter your company code </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter company code"
                  style={{ minWidth: "17rem" }}
                  min={0}
                  value={companyCode}
                  onChange={(e) => {
                    setCompanyCode(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="Form.ControlInput2">
                <Form.Label>Enter your username or email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Username or email address"
                  style={{ minWidth: "17rem" }}
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter your password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    style={{ borderRight: "none", minWidth: "17rem" }}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <Button
                    className="eye-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
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
                <button className="signIn-button mb-2" onClick={handleLogin}>
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

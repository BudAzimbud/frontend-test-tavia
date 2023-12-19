import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Background from "../assets/image/Group 299.png";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../helper/authApi";

function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState({});

  const submit = (event) => {
    event.preventDefault();
    login(value)
      .then((res) => {
        navigate("/");
        localStorage.setItem("token",res.data.access_token);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log()
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [localStorage.getItem("token")]);

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <Row>
      <Col className="d-lg-inline d-none" lg={4}>
        <img src={Background} />
      </Col>
      <Col md={12} lg={8}>
        <div className="d-flex justify-content-center align-items-center pt-5 mt-5 w-100">
          <form onSubmit={submit}>
            <h1 className="fw-normal">Get Started</h1>
            <Row className="gap-3 mt-4">
              <Col className="col-12">
                <label className="fw-semibold fs-5">
                  Email <span className="text-danger">*</span>
                </label>
              </Col>
              <Col>
                <input
                  onChange={onChange}
                  name="email"
                  placeholder="Email"
                  className="w-100 border-0 border-bottom fs-5"
                />
              </Col>
            </Row>
            <Row className="mt-3 gap-3">
              <Col className="col-12">
                <label className="fw-semibold fs-5">
                  Password <span className="text-danger">*</span>
                </label>
              </Col>
              <Col>
                <input
                  onChange={onChange}
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="w-100 border-0 border-bottom fs-5"
                />
              </Col>
            </Row>
            <button
              type="submit"
              className="w-100 bg-danger text-white p-2 fs-5 mt-5 border-0 rounded-pill"
            >
              Login
            </button>
            <Link to={"/register"} className="text-decoration-none ">
              <p className="text-danger text-center mt-4">REGISTER NOW</p>
            </Link>
          </form>
        </div>
      </Col>
    </Row>
  );
}

export default Login;

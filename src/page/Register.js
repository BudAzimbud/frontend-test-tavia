import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Background from "../assets/image/Group 299.png";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../helper/authApi";
import { toast } from "react-toastify";
function Home() {
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  const token = localStorage.getItem("token");

  const submit = (event) => {
    event.preventDefault();
    register(value)
      .then((res) => {
        navigate("/login");
        toast.info('check your email to verification')
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, [token]);

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
            <Row className="gap-2 mt-4">
              <Col className="col-12">
                <label className="fw-semibold fs-5">
                  HP <span className="text-danger">*</span>
                </label>
              </Col>
              <Col>
                <input
                  onChange={onChange}
                  name="phone"
                  placeholder="HP"
                  required
                  className="w-100 border-0 border-bottom fs-5"
                />
              </Col>
            </Row>
            <Row className="gap-2 mt-3">
              <Col className="col-12">
                <label className="fw-semibold fs-5">
                  Email <span className="text-danger">*</span>
                </label>
              </Col>
              <Col>
                <input
                  onChange={onChange}
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-100 border-0 border-bottom fs-5"
                />
              </Col>
            </Row>
            <Row className="mt-3 gap-2">
              <Col className="col-12">
                <label className="fw-semibold fs-5">
                  Password <span className="text-danger">*</span>
                </label>
              </Col>
              <Col>
                <input
                  onChange={onChange}
                  placeholder="Password"
                  name="password"
                  required
                  type="password"
                  className="w-100 border-0 border-bottom fs-5"
                />
              </Col>
            </Row>
            <button
              type="submit"
              className="w-100 bg-danger text-white p-2 fs-5 mt-5 border-0 rounded-pill"
            >
              Register
            </button>
          </form>
        </div>
      </Col>
    </Row>
  );
}

export default Home;

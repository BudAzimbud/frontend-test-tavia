import React from "react";
import { Row, Col } from "react-bootstrap";
import Background from "../assets/image/Group 299.png";
function Home() {
  return (
    <Row>
      <Col className="d-lg-inline d-none" lg={4}>
        <img src={Background} />
      </Col>
      <Col md={12} lg={8}>
        <div className="d-flex justify-content-center align-items-center pt-5 mt-5 w-100">
          <div>
            <h1 className="fw-normal">Get Started</h1>
            <Row className="gap-2 mt-4">
              <Col className="col-12">
                <label className="fw-semibold fs-5">
                  HP <span className="text-danger">*</span>
                </label>
              </Col>
              <Col>
                <input
                  placeholder="HP"
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
                  placeholder="Password"
                  type="password"
                  className="w-100 border-0 border-bottom fs-5"
                />
              </Col>
            </Row>
            <button className="w-100 bg-danger text-white p-2 fs-5 mt-5 border-0 rounded-pill">
              Register
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Home;

import { Card, Col, Form, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Pancake1 from "../assets/image/pancake-1.png";
import kaonIcon from "../assets/image/kaon_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-body-tertiary">
      <div className="position-fixed d-none d-lg-inline z-3 h-100 bg-white px-3 border">
        <div className="mt-2 d-flex flex-column justify-content-between pb-4 h-100">
          <div>
            <img width={40} src={kaonIcon} />
            <div className="mt-5">
              <div className="d-flex flex-column gap-2 justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    opacity="0.15"
                    d="M28.3333 5.66663H5.66666V28.3333H28.3333V5.66663Z"
                    fill="black"
                  />
                  <path
                    d="M28.3333 5.66663H5.66666V28.3333H28.3333V5.66663Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.91666 11.3333H24.0833"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.91666 17H24.0833"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.91666 22.6666H18.4167"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="small">MENU</span>
              </div>
              <div className="d-flex mt-4 flex-column  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    opacity="0.15"
                    d="M7.08333 25.5H26.9167C28.4815 25.5 29.75 24.2315 29.75 22.6666V14.1666H4.25V22.6666C4.25 24.2315 5.51853 25.5 7.08333 25.5Z"
                    fill="#ADADAD"
                  />
                  <path
                    d="M26.9167 8.5H7.08333C5.51853 8.5 4.25 9.76853 4.25 11.3333V14.1667V22.6667C4.25 24.2315 5.51853 25.5 7.08333 25.5H26.9167C28.4815 25.5 29.75 24.2315 29.75 22.6667V14.1667V11.3333C29.75 9.76853 28.4815 8.5 26.9167 8.5Z"
                    stroke="#ADADAD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.75 14.1666H4.25"
                    stroke="#ADADAD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 21.25H14.1667"
                    stroke="#ADADAD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="small">SALES</span>
              </div>
            </div>
          </div>

          <Link to="/login" className="d-flex flex-column gap-2 justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M21.25 28.3334H25.5C27.0649 28.3334 28.3333 27.0648 28.3333 25.5V8.50004C28.3333 6.93519 27.0649 5.66671 25.5 5.66671H21.25"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3333 22.6667L5.66666 17.0001L11.3333 11.3334"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.66666 17H22.6667"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            
            <span className="small">LOGOUT</span>
          </Link>
        </div>
      </div>
      <Navbar className="border bg-white">
        <Container>
          <Navbar.Brand>
            <div className="d-flex align-items-center gap-3">
              <Form.Control
                placeholder="Input QR Code Number"
                className="w-100 px-5 border border-secondary bg-body-tertiary rounded-pill"
              />
              <Button className="rounded-pill px-5" variant="danger">
                Generate
              </Button>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div>
              <small className="text-sm">03 April 2023, 15:00PM</small>
              <h5>Daily Order</h5>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="ps-5">
        <Row className="mt-3">
          <Col lg={8} md={12} >
            <Row>
              {Array.from(Array(20)).map((data) => {
                return (
                  <Col key={data} md={8} lg={3} className="mt-4">
                    <Card>
                      <Card.Img variant="top" src={Pancake1} />
                      <Card.Body>
                        <Card.Title>Strawberry Pancake</Card.Title>
                        <Card.Text>Rp 28,000</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col lg={4} md={12}>
            {Array.from(Array(4)).map((data, idx) => {
              return (
                <div
                  key={data}
                  className="d-flex bg-white border rounded p-3 mt-3 justify-content-between"
                >
                  <div className="fw-semibold">No .{idx + 1}</div>
                  <div className="fw-semibold">
                    <small>Strawberry Pancake</small>
                    <div>Rp 56.000</div>
                  </div>
                  <div className="text-center">
                    <div className="text-body-secondary">QTY</div>
                    <small className="text-dark fw-bold">2</small>
                  </div>
                </div>
              );
            })}
            <div className="d-flex bg-white border rounded p-3 mt-3 justify-content-between">
              <div>
                <small>Total</small>
                <div className="fs-5 fw-semibold">Rp 224.000</div>
              </div>
              <div className="text-center">
                <div className="text-body-secondary">QTY</div>
                <small className="text-dark fw-bold">2</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

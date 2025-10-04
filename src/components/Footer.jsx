import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";
import QR from "../assets/QR.jpg";
import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";

function Footer() {
  return (
    <footer className="footer-section pt-5 pb-3">
      <Container className="container">
        <Row className="gy-4">
          <Col lg={3} md={6}>
            <h5 className="fw-semibold mb-3">Exclusive</h5>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-outline-light">
                <i className="bi bi-send"></i>
              </button>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-semibold mb-3">Support</h5>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="fw-semibold mb-3">Account</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Login / Register</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="fw-semibold mb-3">Quick Link</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="fw-semibold mb-3">Download App</h5>
            <p>Save $3 with App New User Only</p>
            <div className="d-flex" style={{ gap: "5px" }}>
              <img src={QR} alt="QR Code" style={{ height: "70px" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="img-con"
                  style={{ width: "110px", marginLeft: "-5px" }}
                >
                  <img src={app1} alt="Download App" className="image" />
                </div>
                <div className="img-con">
                  <img src={app2} alt="Download App" className="image" />
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 mt-2">
              <a href="#">
                <i className="bi bi-facebook fs-5 text-white"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter fs-5 text-white"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram fs-5 text-white"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin fs-5 text-white"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />
        <p className="text-center small mb-0">
          © Copyright Rimel 2022. All rights reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

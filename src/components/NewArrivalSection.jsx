import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import newArrival1 from "../assets/newArrival1.png";
import newArrival2 from "../assets/newArrival2.jpg";
import newArrival3 from "../assets/newArrival3.png";
import newArrival4 from "../assets/newArrival4.png";

import "../styles/NewArrivalSection.css";

function NewArrivalSection() {
  return (
    <section className="section-today my-5">
      <Container>
        <div className="today-bar">
          <div className="red-bar"></div>
          <h5 className="today-label">Featured</h5>
        </div>

        <h4 className="mb-0 fw-bold title mb-4">New Arrival</h4>

        <Row className="g-3 new-arrival-row">
          <Col lg={6} md={12}>
            <div className="arrival-box big-box">
              <img src={newArrival1} alt="PlayStation 5" />
              <div className="overlay">
                <h5>PlayStation 5</h5>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <button className="btn btn-light btn-sm">Shop Now</button>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <Row className="g-3">
              <Col xs={12}>
                <div className="arrival-box small-box">
                  <img src={newArrival2} alt="Women's Collections" />
                  <div className="overlay">
                    <h5>Women's Collections</h5>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    <button className="btn btn-light btn-sm">Shop Now</button>
                  </div>
                </div>
              </Col>

              <Col xs={6}>
                <div className="arrival-box small-box">
                  <img src={newArrival3} alt="Speakers" />
                  <div className="overlay">
                    <h6>Speakers</h6>
                    <p>Amazon wireless speakers</p>
                    <button className="btn btn-light btn-sm">Shop Now</button>
                  </div>
                </div>
              </Col>

              <Col xs={6}>
                <div className="arrival-box small-box">
                  <img src={newArrival4} alt="Perfume" />
                  <div className="overlay">
                    <h6>Perfume</h6>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <button className="btn btn-light btn-sm">Shop Now</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewArrivalSection;

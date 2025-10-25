import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../styles/HeroSection.css";

import slide1 from "../assets/iPhone.jpg";
import slide2 from "../assets/iPhone.jpg";
import slide3 from "../assets/iPhone.jpg";
import slide4 from "../assets/iPhone.jpg";
import slide5 from "../assets/iPhone.jpg";
import apple from "../assets/apple.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

function HeroSection() {
  return (
    <section className="section1-container container rounded-3">
      <Row className="g-0">
        <Col xs={12} lg={3} className="sidebar order-2 order-lg-1">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Woman's Fashion <span className="text-secondary">&gt;</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Men's Fashion <span className="text-secondary">&gt;</span>
            </li>
            <li className="list-group-item">Electronics</li>
            <li className="list-group-item">Home & Lifestyle</li>
            <li className="list-group-item">Medicine</li>
            <li className="list-group-item">Sports & Outdoor</li>
            <li className="list-group-item">Baby's & Toys</li>
            <li className="list-group-item">Groceries & Pets</li>
            <li className="list-group-item">Health & Beauty</li>
          </ul>
        </Col>

        <Col
          lg={9}
          xs={12}
          className="order-1 order-lg-2"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Carousel controls={false} className="custom-carousel">
            {slides.map((img, index) => (
              <Carousel.Item key={index}>
                <Row className="align-items-center slide-content">
                  <Col md={6} className="text-start ps-5">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <img src={apple} alt="iphone" width={40} />
                      <p className="text-secondary ">iPhone 14 Series</p>
                    </div>
                    <h1 className="display-6 fw-bold">Up to 10% off Voucher</h1>
                    <a href="#" className="btn btn-dark btn-lg mt-3">
                      Shop Now <i className="bi bi-arrow-right"></i>
                    </a>
                  </Col>

                  <Col md={6} className="text-center">
                    <img
                      src={img}
                      className="img-fluid slide-image"
                      alt={`Slide ${index + 1}`}
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </section>
  );
}

export default HeroSection;

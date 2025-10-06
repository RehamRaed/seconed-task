import React from "react";
import { Row, Col } from "react-bootstrap";
import BestProductCard from "./BestProductCard";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import "../styles/TodaySection.css";

const products = [
  {
    img: product6,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
  },
  {
    img: product7,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
  },
  {
    img: product8,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
  },
  {
    img: product9,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4.5,
    reviews: 99,
    discount: 25,
  },
];

function BestSellingSection() {
  return (
    <section className="container section-today my-5">
      <div className="today-bar">
        <div className="red-bar"></div>
        <h5 className="today-label">This Month</h5>
      </div>

      <div className="d-flex justify-content-between  align-items-center mb-4">
        <h4 className="mb-0 fw-bold title">Best Selling </h4>

        <button className="view-btn2">view all</button>
      </div>

      <div className="products">
        <Row className="g-3">
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl={3}>
              <BestProductCard product={product} />
            </Col>
          ))}
        </Row>
    
      </div>
    </section>
  );
}

export default BestSellingSection;

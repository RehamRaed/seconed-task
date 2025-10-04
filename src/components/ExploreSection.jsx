import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BestProductCard from "./BestProductCard";

import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.png";
import product16 from "../assets/product16.png";
import product17 from "../assets/product17.png";

import "../styles/TodaySection.css";

const products = [
  {
    img: product10,
    name: "Breed Dry Dog Food",
    price: 100,
    oldPrice: 120,
    rating: 5,
    reviews: 35,
    discount: null,
    tag: null,
  },
  {
    img: product11,
    name: "CANON EOS DSLR Camera",
    price: 360,
    oldPrice: 400,
    rating: 4,
    reviews: 95,
    discount: null,
    tag: null,
  },
  {
    img: product12,
    name: "ACER FHD Gaming Laptop",
    price: 1100,
    oldPrice: null,
    rating: 5,
    reviews: 145,
    discount: null,
    tag: null,
  },
  {
    img: product13,
    name: "Curology Product Set",
    price: 500,
    oldPrice: null,
    rating: 4,
    reviews: 145,
    discount: null,
    tag: null,
  },
  {
    img: product14,
    name: "Kids Electric Car",
    price: 960,
    oldPrice: 1160,
    rating: 4.5,
    reviews: 65,
    discount: 35,
    tag: "New",
    colors: ["red", "blue", "black"],
  },
  {
    img: product15,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    oldPrice: null,
    rating: 5,
    reviews: 30,
    discount: null,
    tag: "New",
    colors: ["green", "orange"],
  },
  {
    img: product16,
    name: "Game Controller",
    price: 550,
    oldPrice: 600,
    rating: 4,
    reviews: 46,
    discount: null,
    tag: "New",
    colors: ["black", "white"],
  },
  {
    img: product17,
    name: "Quilted Satin Jacket",
    price: 500,
    oldPrice: 600,
    rating: 4.5,
    reviews: 45,
    discount: null,
    tag: null,
    colors: ["brown", "navy", "grey"],
  },
];
function ExploreSection() {
  return (
    <section className="explore-products-section my-5">
      <Container>
        <div className="today-bar">
          <div className="red-bar"></div>
          <h5 className="today-label">Featured</h5>
        </div>
        <div className=" d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0 fw-bold title">Explore Our Products</h4>

          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn rounded-circle p-2 me-2 d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgb(238, 238, 238)",
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <button
              type="button"
              className="btn rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgb(238, 238, 238)",
              }}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </Container>

      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <BestProductCard product={product} />
            </Col>
          ))}
        </Row>

        <div className="container btn-container">
          <button className="view-btn">View All Products</button>
        </div>
      </Container>
    </section>
  );
}

export default ExploreSection;

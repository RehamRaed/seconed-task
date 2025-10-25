import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExploreProductCard from "./ExploreProductCard";

import "../styles/TodaySection.css";

function ExploreSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const exploreData = data.slice(10, 18);
        setProducts(exploreData);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="container explore-products-section my-5">
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

      <Row className="g-3">
        {products.map((product, index) => (
          <Col key={index} lg={4} xl={3} md={4} sm={6} xs={12}>
            <div style={{ position: "relative" }}>
              {(index === 4 || index === 6) && (
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "yellow",
                    color: "#000",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    zIndex: 10,
                  }}
                >
                  New
                </div>
              )}

              <ExploreProductCard product={product} />
            </div>
          </Col>
        ))}
      </Row>

      <div className="container btn-container">
        <button className="view-btn">View All Products</button>
      </div>
    </section>
  );
}

export default ExploreSection;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/CategoriesSection.css";

const categories = [
  { id: 1, name: "Phones", icon: "bi-phone" },
  { id: 2, name: "Computers", icon: "bi-laptop" },
  { id: 3, name: "SmartWatch", icon: "bi-smartwatch" },
  { id: 4, name: "Camera", icon: "bi-camera" },
  { id: 5, name: "HeadPhones", icon: "bi-headphones" },
  { id: 6, name: "Gaming", icon: "bi-controller" },
];

function CategoriesSection() {
  return (
    <section className="container my-5">
      <div className="today-bar">
        <div className="red-bar"></div>
        <h5 className="today-label">Categories</h5>
      </div>
      <div className=" d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0 fw-bold title">Browse By Category</h4>

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

      <Row className="g-4 ">
        {categories.map((cat) => (
          <Col
            key={cat.id}
            xs={6}
            sm={4}
            md={4}
            lg={2}
            className="d-flex justify-content-center "
          >
            <div className="category-box d-flex flex-column align-items-center justify-content-center">
              <i className={`bi ${cat.icon} category-icon`}></i>
              <span className="fw-medium">{cat.name}</span>
            </div>
          </Col>
        ))}
      </Row>

      <hr className="custom-hr mt-5" />
    </section>
  );
}

export default CategoriesSection;

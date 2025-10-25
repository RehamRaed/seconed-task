import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/ServicesSection.css";
function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: "bi-truck",
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: "bi-headset",
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: "bi-shield-check",
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    },
  ];

  return (
    <section className="container services-section">
        <Row className="text-center">
          {services.map((service) => (
            <Col key={service.id} lg={4} md={6} sm={12} className="mb-4">
              <div className="service-box service-box2  p-4 h-100 " >
                <div className="icon-circle mb-3">
                  <i className={`${service.icon} fs-3`}></i>
                </div>
                <h6 className="fw-bold">{service.title}</h6>
                <p className="text-muted small">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
    </section>
  );
}

export default ServicesSection;

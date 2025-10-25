import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/ServicesSection.css";
function StatisticsSection() {
  const Statistics = [
    {
      id: 1,
      icon: "bi bi-shop",
      number: "10.5K",
      desc: "Sallers active our site",
    },
    {
      id: 2,
      icon: "bi bi-currency-dollar",
      number: "35K",
      desc: "Mopnthly Produduct Sale",
    },
    {
      id: 3,
      icon: "bi bi-gift",
      number: "45K",
      desc: "Customer active in our site",
    },
    {
      id: 4,
      icon: "bi bi-cash-stack ",
      number: "20K",
      desc: "Anual gross sale in our site",
    }
  ];

  return (
    <section className="container services-section">
        <Row className="text-center">
          {Statistics.map((Statistic) => (
            <Col key={Statistic.id} lg={3} md={6} sm={12} className="mb-4">
              <div className="service-box p-4 h-100">
                <div className="icon-circle mb-3">
                  <i className={`${Statistic.icon} fs-3`}></i>
                </div>
                <h6 className="fw-bold">{Statistic.number}</h6>
                <p className="text-muted small">{Statistic.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
    </section>
  );
}

export default StatisticsSection;

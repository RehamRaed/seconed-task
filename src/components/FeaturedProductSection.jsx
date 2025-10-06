import React, { useEffect, useState } from "react";
import {  Row, Col, Button } from "react-bootstrap";
import product5 from "../assets/product5.png";

function FeaturedProductSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 6);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: timeLeft.days, unit: "Days" },
    { value: timeLeft.hours, unit: "Hrs" },
    { value: timeLeft.minutes, unit: "Mins" },
    { value: timeLeft.seconds, unit: "Secs" },
  ];

  return (
    <section className="container my-5 d-flex justify-content-center featured-section">
      <Row className="w-100" style={{ backgroundColor: "#040404ff" }}>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center"
          style={{ padding: "30px" }}
        >
          <h5 className="mb-2 fw-normal" style={{ color: "#18fb6fff" }}>
            Categories
          </h5>

          <h3 className="display-4 fw-semibold text-white">Enhance Your <br />Music Experience</h3>

          <div className="d-flex my-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="text-center me-3 p-2 rounded-circle bg-white text-dark d-flex flex-column justify-content-center align-items-center"
                style={{ width: "55px", height: "55px" }}
              >
                <h6 className="fw-semibold mb-0">
                  {String(item.value).padStart(2, "0")}
                </h6>
                <p className="small mb-0">{item.unit}</p>
              </div>
            ))}
          </div>

          <Button
            variant="success"
            size="lg"
            href="#"
            style={{
              width: "fit-content",
              backgroundColor: "#18fb6fff",
              borderColor: "#18fb6fff",
              fontSize:"16px",
              padding:"8px 25px"
            }}
          >
            Buy Now
          </Button>
        </Col>

        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={product5}
            alt="product"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </section>
  );
};

export default FeaturedProductSection;

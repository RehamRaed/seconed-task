import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import product5 from "../assets/product5.png";

const FeaturedProductSection = ({
  title = "Enhance Your Music Experience",
  category = "Categories",
  buyLink = "#",
}) => {
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
    <Container className="container my-5 d-flex justify-content-center ">
      <Row className="w-100" style={{ backgroundColor: "#040404ff" }}>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center"
          style={{ padding: "30px" }}
        >
          <h5 className="mb-2 fw-normal" style={{ color: "#18fb6fff" }}>
            {category}
          </h5>

          <h2 className="display-4 fw-semibold text-white">{title}</h2>

          <div className="d-flex my-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="text-center me-3 p-2 rounded-circle bg-white text-dark d-flex flex-column justify-content-center align-items-center"
                style={{ width: "65px", height: "65px" }}
              >
                <h4 className="fw-bold mb-0">
                  {String(item.value).padStart(2, "0")}
                </h4>
                <p className="small mb-0">{item.unit}</p>
              </div>
            ))}
          </div>

          <Button
            variant="success"
            size="lg"
            href={buyLink}
            style={{
              width: "fit-content",
              backgroundColor: "#18fb6fff",
              borderColor: "#18fb6fff",
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
    </Container>
  );
};

export default FeaturedProductSection;

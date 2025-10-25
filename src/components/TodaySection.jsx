import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/TodaySection.css";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

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

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      <div>
        {String(timeLeft.days).padStart(2, "0")}
        <div style={{ fontSize: "12px", fontWeight: "normal" }}>Days</div>
      </div>
      <div>:</div>
      <div>
        {String(timeLeft.hours).padStart(2, "0")}
        <div style={{ fontSize: "12px", fontWeight: "normal" }}>Hours</div>
      </div>
      <div>:</div>
      <div>
        {String(timeLeft.minutes).padStart(2, "0")}
        <div style={{ fontSize: "12px", fontWeight: "normal" }}>Minutes</div>
      </div>
      <div>:</div>
      <div>
        {String(timeLeft.seconds).padStart(2, "0")}
        <div style={{ fontSize: "12px", fontWeight: "normal" }}>Seconds</div>
      </div>
    </div>
  );
}

function TodaySection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const firstSix = data.slice(0, 6);
        setProducts(firstSix);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="container mt-5 mb-4">
        <div className="today-bar">
          <div className="red-bar"></div>
          <h5 className="today-label">Today’s</h5>
        </div>

        <div className="d-flex justify-content-between title-bar">
          <div className="d-flex  title">
            <h4 className="mb-0 fw-bold">Flash Sales</h4>
            <Countdown />
          </div>

          <div className="d-flex arrows">
            <button
              type="button"
              className="btn rounded-circle p-2 me-2 d-flex  justify-content-center"
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
      </section>

      <div className="products-scroll">
        <div className="products-row">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>

      <div className="container btn-container">
        <button className="view-btn">View All Products</button>
        <hr className="custom-hr" />
      </div>
    </>
  );
}

export default TodaySection;

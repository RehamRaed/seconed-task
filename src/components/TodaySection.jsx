import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product4.png";
import "../styles/TodaySection.css";

const products = [
  {
    img: product1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
  },
  {
    img: product2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
  },
  {
    img: product3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
  },
  {
    img: product4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4.5,
    reviews: 99,
    discount: 25,
  },
  {
    img: product5,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4.5,
    reviews: 99,
    discount: 25,
  },
  {
    img: product4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4.5,
    reviews: 99,
    discount: 25,
  },
  {
    img: product5,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4.5,
    reviews: 99,
    discount: 25,
  },
];

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
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
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

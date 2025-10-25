import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import BestProductCard from "./BestProductCard";
import "../styles/TodaySection.css";



function BestSellingSection() {
  const[products , setProducts]=useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res =>res.json())
    .then(data=>{
      const bestSelling= data.slice(6,10);
      setProducts(bestSelling);
    })
    .catch(err => console.error(err));
  },[])
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
          {products.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl={3}>
              <BestProductCard product={item} />
            </Col>
          ))}
        </Row>
    
      </div>
    </section>
  );
}

export default BestSellingSection;

import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card product-card position-relative">
      <div className="img-container">
        <img src={product.img} className="card-img" alt={product.name} />

        <div className="img-top">
          <div className="badge bg-danger discount-badge">
            -{product.discount}%
          </div>
          <div className="icons">
            <div className="img-icon">
              <i class="bi bi-heart"></i>
            </div>
            <div className="img-icon">
              <i class="bi bi-eye"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body text-start p-3 d-flex flex-column justify-content-between">
        <div>
          <h6 className="card-title">{product.name}</h6>
          <p className="card-text mb-1">
            <span className="text-danger">${product.price}</span>{" "}
            <small className="text-muted text-decoration-line-through">
              ${product.oldPrice}
            </small>
          </p>
          <p className="mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`bi bi-star-fill ${
                  i < Math.floor(product.rating) ? "text-warning" : "text-muted"
                }`}
              ></i>
            ))}
            <span className="ms-1">({product.reviews})</span>
          </p>
        </div>

        <button className="btn btn-dark btn-sm w-100 add-cart-btn">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

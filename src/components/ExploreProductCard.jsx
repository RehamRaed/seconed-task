import React from "react";
import "../styles/ProductCard.css";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";
import { Link } from "react-router-dom";

function ExploreProductCard({ product }) {
  const { addToCart } = useCart();
  const { addFavorite } = useFavorite();

  return (
    <div className="card product-card ">
      <div className="img-container">
        <img src={product.image} className="card-img" alt={product.title} />

        <div className="img-top" style={{ justifyContent: "flex-end" }}>
          <div className="icons">
            <div className="img-icon" onClick={() => addFavorite(product)}>
              <i className="bi bi-heart"></i>
            </div>
            <div className="img-icon">
              <Link to={`/product/${product.id}`}>
                <i className="bi bi-eye "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body text-start p-3 d-flex flex-column justify-content-between">
        <div>
          <h6 className="card-title">
            {" "}
            {product?.title
              ? product.title.length > 24
                ? product.title.slice(0, 24) + "..."
                : product.title
              : "No title"}
          </h6>
          <p className="card-text mb-1">
            <span className="text-danger">${product.price}</span>
          </p>
          <p className="mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`bi bi-star-fill ${
                  i < Math.floor(product.rating.rate)
                    ? "text-warning"
                    : "text-muted"
                }`}
              ></i>
            ))}
            <span className="ms-1">({product.rating.count})</span>
          </p>
        </div>

        <button
          className="btn btn-dark btn-sm w-100 add-cart-btn"
          onClick={() => addToCart(product)} 
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ExploreProductCard;

import React from "react";
import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addFavorite } = useFavorite();

  const [discount] = React.useState(Math.floor(Math.random() * 30) + 10);

  const oldPrice = (product.price * (100 + discount) / 100).toFixed(2);

  return (
    <div className="card product-card position-relative">
      <div className="img-container">
        <img src={product.image} className="card-img" alt={product.title} />

        <div className="img-top">
          <div className="badge bg-danger discount-badge">
            -{discount}%
          </div>
          <div className="icons" >
            <div className="img-icon" onClick={() =>addFavorite(product)}>
              <i className="bi bi-heart"></i>
            </div>
            <div className="img-icon">
               <Link to={`/product/${product.id}`} >
              <i className="bi bi-eye "></i>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body text-start p-3 d-flex flex-column justify-content-between">
        <div>
          <h6 className="card-title">{product?.title
            ?product.title.length >24
            ?product.title.slice(0,24)+"..."
            :product.title
            : "No Tiltle"
            }</h6>
          <p className="card-text mb-1">
            <span className="text-danger">${product.price}</span>{" "}
            <small className="text-muted text-decoration-line-through">
              ${oldPrice}
            </small>
          </p>
          <p className="mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`bi bi-star-fill ${
                  i < Math.floor(product.rating.rate) ? "text-warning" : "text-muted"
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

export default ProductCard;
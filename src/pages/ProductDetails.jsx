import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container py-5">
      <h6 className="home-word">
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "rgb(159, 159, 159)" }}
        >
          Home
        </Link>{" "}
        / <span>Product Details</span>
      </h6>
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="p-5 "
            style={{ maxWidth: "80%" }}
          />
        </div>
        <div className="col-md-7">
          <h3>{product.title}</h3>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-danger">${product.price}</h4>
          <p>{product.description}</p>

          <button
            className="btn btn-dark mt-3 px-5"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

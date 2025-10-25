import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";
import { useAuth } from "../context/AuthContect";

function Header() {
  const { totalQuantity } = useCart();
  const { totalFavorites } = useFavorite();
  const { currentUser, logout } = useAuth();

  return (
    <>
      <div className="container header">
        <h1 className="logo">Exclusive</h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/auth">Sign Up</Link>
        </div>

        <div className="third-sec">
          <div
            className="search-box"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "5px 5px",
              padding: "0px 10px",
            }}
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              style={{
                border: "none",
                backgroundColor: "transparent",
                padding: "5px 0px",
              }}
            />
            <i
              className="bi bi-search"
              style={{ fontSize: "15px", color: "black" }}
            ></i>
          </div>

          <div className="header-icons d-flex align-items-center gap-3">
            
            <div className="fav position-relative">
              <Link to="/favorites">
                <i
                  className="bi bi-heart"
                  style={{ fontSize: "25px", color: "black" }}
                ></i>
              </Link>
              {totalFavorites > 0 && (
                <span className="cart-badge" style={{ fontSize: "0.75rem" }}>
                  {totalFavorites}
                </span>
              )}
            </div>

            <div className="fav position-relative">
              <Link to="/cart">
                <i
                  className="bi bi-cart"
                  style={{ fontSize: "25px", color: "black" }}
                ></i>
              </Link>
              {totalQuantity > 0 && (
                <span className="cart-badge" style={{ fontSize: "0.75rem" }}>
                  {totalQuantity}
                </span>
              )}
            </div>

            {currentUser && (
              <div className="fav position-relative">
                <div className="dropdown">
                  <i
                    className="bi bi-person-circle"
                    style={{
                      fontSize: "25px",
                      color: "black",
                      cursor: "pointer",
                    }}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>

                  <ul className="dropdown-menu dropdown-menu-end shadow">
                    <li className="dropdown-item text-center fw-semibold">
                      {currentUser.displayName || currentUser.email}
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger text-center"
                        onClick={logout}
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}

export default Header;

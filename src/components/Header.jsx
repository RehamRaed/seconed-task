import "../styles/Header.css";

function Header() {
  return (
    <>
      <div className="container header">
        <h1 className="logo">Exclusive</h1>

        <div className="links">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Sign Up</a>
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
          <div className="header-icons">
            <div className="fav">
              <i
                className="bi bi-heart"
                style={{ fontSize: "25px", color: "black" }}
              ></i>
            </div>

            <div className="fav">
              <i
                className="bi bi-cart"
                style={{ fontSize: "25px", color: "black" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}
export default Header;

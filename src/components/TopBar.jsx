import React from "react";
import "../styles/TopBar.css";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-announcement-bar">
        <div className="bar-section left-section"></div>

        <div className="bar-section center-section">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#">SHOPNOW</a>
          </span>
        </div>

        <div className="bar-section right-section">
          <div className="dropdown">
            <button className="dropbtn">
              English <i className="bi bi-caret-down-fill"></i>
            </button>
            <div className="dropdown-content">
              <div>English</div>
              <div>Arabic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBar;

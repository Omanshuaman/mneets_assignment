import React from "react";
import ChevronUpLogo from "../../assests/chevron-up.svg";
import DropdownLogo from "../../assests/dropdown.svg";
import SearchLogo from "../../assests/search.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="search">
      <div className="search-child">
        <div className="search-button">
          <img src={SearchLogo} alt="Your SVG" className="search-svg" />
        </div>
        <div className="search-dropdown">
          <div className="search-dropdown-user">
            <div className="search-dropdown-username">
              <div className="search-dropdown-username-logo">
                <img src={DropdownLogo} alt="Your SVG" className="search-svg" />
              </div>
              <div className="search-dropdown-username-name">USER</div>
            </div>
            <div className="search-dropdown-logo">
              <img src={ChevronUpLogo} alt="Your SVG" className="search-svg" />
            </div>
          </div>
          <div className="search-dropdown-button"></div>
        </div>
      </div>
      <div className="search-line"></div>
    </div>
  );
};

export default Header;

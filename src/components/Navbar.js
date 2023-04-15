import React from "react";
import "./components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faLocationDot,
  faShirt,
  faShoePrints,
  faStopwatch,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import oldLogo from "../assets/old-logo.svg";

function Navbar() {
  return (
    <div className="main-nav">
      <div className="navbar">
        <img src={oldLogo} alt="logo" className="main-logo" />
        <div className="nav-links">
          <FontAwesomeIcon icon={faLocationDot} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faBagShopping} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <ul className="sub-navbar">
        <li className="navbar-buttons">
          <FontAwesomeIcon icon={faShirt} />
          <p>Clothes</p>
        </li>
        <li className="navbar-buttons">
          <FontAwesomeIcon icon={faShoePrints} />
          <p>Shoes</p>
        </li>
        <li className="navbar-buttons">
          <FontAwesomeIcon icon={faStopwatch} />
          <p>Watches</p>
        </li>
        <li className="navbar-buttons">
          <FontAwesomeIcon icon={faWallet} />
          <p>Accessories</p>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

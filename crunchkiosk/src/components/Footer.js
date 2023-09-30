import React, { useEffect, useState } from "react";
import "../css/Footer.css";

import { Link } from "react-router-dom";

const Footer = ({theTotal=0}) => {

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(theTotal);
  }
  , [theTotal]);

  return (
    <div className="footer-container">
      <div className="foot-branding">
        <span>Code & Design by </span>
        <img src={require("../assets/logo.png")} />
        <span>Crunch Kiosk</span>
        <Link to="/cart" className="foot-social">
          <div className="view-cart">
            View Cart
          </div>
        </Link>
      </div>

      <p className = "total">Total: ${total}</p>
    </div>
  );
};

export default Footer;

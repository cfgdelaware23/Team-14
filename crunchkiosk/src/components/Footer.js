<<<<<<< HEAD
import React, { useState } from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [total,setTotal] = useState(0);
=======
import React, { useState } from "react";
import "../css/Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const [total, setTotal] = useState(0);
>>>>>>> ce6b1db (update Home)

  return (
    <div className="footer-container">
      <div className="foot-branding">
        <span>Code & Design by </span>
        <img src={require("../assets/logo.png")} />
        <span>Crunch Kiosk</span>
        <Link to="/cart" className="foot-social">
          View Cart
        </Link>
      </div>

      <p>Total: ${total}</p>
    </div>
  );
};

export default Footer;

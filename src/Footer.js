import React from "react";
import Logo from "./image/Logo.png";
import "./CSS/footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} />
      <span>Powerd by TELEWORKING</span>
    </div>
  );
}

export default Footer;

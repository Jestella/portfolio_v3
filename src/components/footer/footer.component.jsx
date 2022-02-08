import React from "react";

import "./footer.styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <p>© STELLA LEE {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

import "./navbar.styles.scss";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Navbar() {
  return (
    <div className="header">
      <nav className="nav">
        <p className="nav_item nav_left" onClick={scrollToTop}>
          JE.
        </p>
        <p className="nav_item nav_right" onClick={scrollToTop}>
          STELLA LEE
        </p>
      </nav>
    </div>
  );
}

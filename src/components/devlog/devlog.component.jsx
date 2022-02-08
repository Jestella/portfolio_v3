import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import SectionTitle from "../section-title/section-title.component";

import "./devlog.styles.scss";

export default function Devlog() {
  return (
    <div className="devlog">
      <SectionTitle>devlog</SectionTitle>
      <div className="devlog_container">
        <h2>Coming Soon...⚠️</h2>
        <p>What I learned & built this month.</p>
        {/* <Link to="/devlog" className="btn"> */}
        <Button> Click Here</Button>

        {/* </Link> */}
      </div>
    </div>
  );
}

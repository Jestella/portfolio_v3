import React from "react";
import {
  FaCodeBranch,
  FaCode,
  FaWrench,
  FaCog,
  FaStarOfLife,
} from "react-icons/fa";

import "./home.styles.scss";

import Main from "../main/main.component";

function Home() {
  return (
    <div className="home">
      <div className="image_container hue_shift">
        <FaCodeBranch className="fa-code-branch responsive_icon" />
        <FaCog className="fa-cog responsive_icon" />
        <FaCode className="fa-code responsive_icon" />
        <FaWrench className="fa-wrench responsive_icon" />
        <FaStarOfLife className="fa-star responsive_icon" />
      </div>
      <Main />
    </div>
  );
}

export default Home;

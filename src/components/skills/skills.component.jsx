import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import typescript from "../../assets/Typescript.png";
import sass from "../../assets/sass.png";

import "./skills.styles.scss";

import SectionTitle from "../section-title/section-title.component";

function Skills() {
  return (
    <div className="skills">
      <SectionTitle>skills .</SectionTitle>
      <div className="skills_container">
        <ul>
          <li>
            <FaReact color="#1cc5dc" />
            <p>React</p>
          </li>
          <li>
            <FaNodeJs color="#4aa96c" />
            <p>Node.js</p>
          </li>
          <li>
            <img src={typescript} className="typescript" />
            <p>TypeScript</p>
          </li>
          <li>
            <FaJs color="#fdca40" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src={sass} className="sass" />
            <p>Sass</p>
          </li>
          <li>
            <FaBootstrap color="#542e71" />
            <p>Bootstrap</p>
          </li>
          <li>
            <FaCss3Alt color="#2978b5" />
            <p>CSS3</p>
          </li>
          <li>
            <FaHtml5 color="#ff5200" />
            <p>HTML5</p>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;

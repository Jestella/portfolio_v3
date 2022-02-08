import React from "react";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import memoji from "../../assets/memoji.png";
import SectionTitle from "../section-title/section-title.component";
import resume from "../../assets/stellalee_CV.pdf";

import "./about.styles.scss";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false,
    };
  }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };

  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };

  render() {
    return (
      <div className="about">
        <SectionTitle>about .</SectionTitle>
        <div className="about_container">
          <h1>
            Hello, I'm Stella!&nbsp;
            <img src={memoji} className="Memoji" />
          </h1>
          <p>
            I am a self-taught front end web developer,
            <br />
            who has a <span>strong passion</span> for building creative websites
            and learning new skills.
          </p>
          <h3>When it comes to work</h3>
          <p>
            As a firm believer that <span>tenacity and grit</span> are drivers
            of success, I am <span>disciplined and do not give up easily </span>
            on complex or challenging tasks. I approach every single project
            with an <span>ownership mentality</span> and push the limits to get
            things done.
          </p>
          <h3>Outside of work</h3>
          <p>
            When I am not staring at my code, I walk or bike around the city,
            pet someone else’s dog and watch sunsets.
          </p>

          <button onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <a href={resume} target="_blank">
              RESUME &nbsp;
              {this.state.isMouseInside ? (
                <FaRegFolderOpen className="folder_open" />
              ) : (
                <FaRegFolder className="folder" />
              )}
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default About;

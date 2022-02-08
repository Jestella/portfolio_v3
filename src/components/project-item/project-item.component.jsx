import React from "react";
import Button from "../button/button.component";

import "./project-item.styles.scss";

class ProjectItem extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          id: 1,
          projectName: "Style S / 2021",
          subName: "An e-commerce platform built with React and Redux",
          technologies: "React, Redux, Scss",
          imageUrl:
            "https://user-images.githubusercontent.com/31642902/123004445-98efe580-d382-11eb-9d4b-5b954c708aed.png",
          liveDemo: "https://jestella.github.io/e-commerce/",
          gitHub: "https://github.com/Jestella/e-commerce",
          description1: "Style S is an e-commerce application.",
          description2:
            "Features: 1). Google Sign In Authentication 2). Payment with Stripe API 3). Add items from Shop page 4). Remove items from Checkout page.",
        },
        {
          id: 2,
          projectName: "S Multimedia Studio / 2021",
          subName: "A single page website I built to practice DOM",
          technologies: "JavaScript, CSS3, HTML5",
          imageUrl:
            "https://user-images.githubusercontent.com/31642902/114468658-d7666880-9bb9-11eb-8a58-66c4e076946c.png",
          liveDemo: "https://jestella.github.io/multimedia/",
          gitHub: "https://github.com/Jestella/multimedia",
          description1:
            "All components, including modal window, slider, tabs, navbar are built with pure JavaScript.",
          description2:
            "Event propagation, delegation, DOM traversing, and lazy loading images are used for the project.",
        },
        {
          id: 3,
          projectName: "You can work with Stella / 2021",
          subName: "Get-to-Know-Her Quiz built with React",
          technologies: "React, TypeScript",
          imageUrl:
            "https://user-images.githubusercontent.com/31642902/137574103-2a8f5da8-9bd0-4837-9bca-5ba704d331fd.png",
          liveDemo: "https://jestella.github.io/quiz/",
          gitHub: "https://github.com/Jestella/quiz",
          description1: "A quiz app built with React and TypeScript",
          description2:
            "Created quiz API (url: https://s-quiz-api.herokuapp.com/quiz)",
        },
        {
          id: 4,
          projectName: "Star Wars for non Star Wars fans / 2021",
          subName: "A Star Wars Cheat Sheet",
          technologies: "SWAPI API, React",
          imageUrl:
            "https://user-images.githubusercontent.com/31642902/127957249-625c5e54-f461-40e9-96f4-4be0ad42cbfb.png",
          liveDemo: "https://jestella.github.io/starwars/",
          gitHub: "https://github.com/Jestella/starwars",
          description1: "Click the logo if you don't see the main page.",
          description2:
            "Illustration Copyright: Lucasfilm Ltd. (11), Charles Morgan Smith—Getty Images; Photo Illustration by Kenneth Bachor for TIME https://time.com/4788422/best-star-wars-moments/",
        },

        // {
        //   id: 4,
        //   projectName: "A Word A Day / 2021",
        //   subName: "A dictionary app built with React",
        //   technologies: "React",
        //   imageUrl:
        //     "https://user-images.githubusercontent.com/31642902/115822845-3c4c6a80-a3d3-11eb-99b9-26000754774f.png",
        //   liveDemo: "https://jestella.github.io/AWAD/",
        //   gitHub: "https://github.com/Jestella/AWAD",
        //   description1:
        //     "SA Word A Day is a dictionary app for those who want to learn multiple languages at once.",
        //   description2:
        //     "How to use (4-steps): 1). Input a new word 2). Add a sample sentence 3). Provide definition of the new word 4). Click pencil icon to create a new note.",
        // },
        {
          id: 5,
          projectName: "Blog, Story / 2020",
          subName: "A simple blog website built using ejs",
          technologies: "JavaScript, Node.js, Bootstrap, EJS",
          imageUrl:
            "https://user-images.githubusercontent.com/31642902/114458503-46899000-9bad-11eb-8f50-4a3cee818d93.png",
          liveDemo: "http://project1-blog.herokuapp.com/",
          gitHub: "https://github.com/Jestella/blog",
          description1:
            "Blog, Story is a personal blog website built with EJS templating language and Bootstrap.",
          description2: "The app is connected to MongoDB using Mongoose.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="project_item">
        {this.state.projects.map((projects) => (
          <div key={projects.id}>
            <h2 className="project_name">{projects.projectName}</h2>
            <div className="project_container">
              <div className="project_image_container">
                <img src={projects.imageUrl} class="project_image"></img>
              </div>
              <div className="project_content_container">
                <p className="project_technologies">
                  // {projects.technologies}
                </p>
                <h3 className="project_subname">{projects.subName}</h3>
                <div class="project_btn">
                  <Button>
                    <a href={projects.liveDemo} target="_blank">
                      live demo
                    </a>
                  </Button>
                  <Button>
                    <a href={projects.gitHub} target="_blank">
                      github
                    </a>
                  </Button>
                </div>
                <p>&#8226; {projects.description1}</p>
                <p>&#8226; {projects.description2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectItem;

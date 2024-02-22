import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const spotlightProjects = {
      "Student Accommodation HQ": {
        title: "Student Accommodation HQ",
        desc:
          "In university, choosing the right accommodation is key. My web app simplifies this by offering a database of reviews and ratings from past residents. Students can explore these insights, complete with reviews and photos, to make informed housing choices tailored to their preferences. My aim is to equip students with the knowledge to select the ideal living space",
        techStack: "MongoDB, Express.js, React.js, and Nodejs.",
        link:
          "https://github.com/hamse47/Student-Accomm-review#student-accomm-review",
        open:
          "https://github.com/hamse47/Student-Accomm-review#review---confirmation-and-submission",
        image: "/assets/student-accomm.png",
      },
      SummaryAI: {
        title: "SummaryAI",
        desc:
          "Your go-to solution for navigating the ocean of information in today’s fast-paced world. We harness the power of advanced AI to transform lengthy articles, reports, and documents into concise, easy-to-digest summaries.",
        techStack: "React.js (Vite), Javascript,  RapidAPI, CSS",
        link: "https://github.com/hamse47/SummaryAI",
        open: "https://summary-article.netlify.app/",
        image: "/assets/summary_aI-new-Home.png",
      },
      "Film Flickster": {
        title: "Film Flickster",
        desc:
          "Film Flickster is a web application that allows users to discover and explore movies and TV shows. It provides information about popular movies, trending content, and allows users to search for their favourite films. ",
        techStack: "React.JS, Node.JS, material-UI NPM",
        link: "https://github.com/hamse47/film-flickster",
        open: "https://flim-flickster.netlify.app/",
        image: "/assets/flimFlickster.png",
      },
<<<<<<< HEAD
    };
    /*const projects = {
      SnakeGame: {
        desc: "A classic snake game from my childhood Turtle with python",
        techStack: "Python (turtle), HTML",
        link: "https://github.com/hamse47/SnakeGame",
        open: "https://SnakeGame.herokuapp.com/",
      },
      lorem: {
        desc:
          "lorem ipsum dolor sit amet, consectetur adip ex ante et iustet et iustet iustet interlorem ipsum dolor sit amet, consectetur adip ex ante et iustet et ilorem ipsum dolor sit amet, consectetur adip ex ante et iustet et ilorem ipsum dolor sit amet, consectetur adip ex ante et iustet et ilorem ipsum dolor sit amet, consectetur adip ex ante et iustet et ",
        techStack: "Node.js (Express.js), React.js",
        link:
          "https://github.com/hamse47/lorem ipsum dolor sit amet, consectetur adip ex ante et iustet ",
      },
=======
     
    };
    const projects = {
     
>>>>>>> 7ed38fb ( updated experience About pages)
    };
    */

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Software- Projects</span>
        </div>
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {/**  {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}</div> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

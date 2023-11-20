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
      "Film Flixster": {
        title: "Film Flixster",
        desc:
          "Film Flickster is a web application that allows users to discover and explore movies and TV shows. It provides information about popular movies, trending content, and allows users to search for their favourite films. ",

        techStack: "REACT.JS NODE.JS, material-UI NPM ",
        link: "https://github.com/hamse47/film-flickster",
        open: "https://github.com/hamse47/film-flickster#trending-page",
        image: "/assets/flimFlickster.png",
      },
      Truth: {
        title: "truth",
        desc:
          "A three.js simulation of the planet system revolving around a monolith.",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/hamzahamza/truth",
        open: "https://hamzahamza.github.io/Truth/",
        image: "/assets/student-accomm.png",
      },
      Portfolio: {
        title: "portfolio.js",
        desc:
          "A small JS library that helps with clear and succinct data presentation.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/hamzahamza/Portfolio.js",
        open: "https://afternoon-ocean-92382.herokuapp.com/",
        image: "/assets/portfolio.png",
      },
    };
    const projects = {
      "TDSB Homework Management Interface": {
        desc:
          "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
        techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
        link: "https://github.com/hamzahamza/TDSBHomeworkManagement",
        open: "https://tdsb-app.herokuapp.com/",
      },
      "Adam A.I.": {
        desc:
          "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/hamzahamza/adamai",
        open: "https://hamzahamza.github.io/AdamAI/",
      },
      "Distributed Logging and Monitoring System": {
        desc:
          "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link:
          "https://github.com/hamzahamza/Distributed-Logging-and-Monitoring-System",
      },
      "Odin Bot": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "https://github.com/hamzahamza/OdinBot",
        open: "",
      },
      "Game Centre": {
        desc:
          "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
        techStack: "Java, Android Studio",
        link: "https://github.com/hamzahamza/gamecentre",
        open: "",
      },
      "Minimax Stonehenge": {
        desc:
          "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
        techStack: "Python",
        link: "https://github.com/hamzahamza/stonehenge",
        open: "",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Software- Projects</span>
        </div>
        <Carousel>
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
            {Object.keys(projects).map((key, i) => (
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
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

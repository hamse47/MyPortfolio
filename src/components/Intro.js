import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hello, "}
            <span className="intro-name">{"Hamza"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff.</div>
          <div className="intro-desc">
<<<<<<< HEAD
            I'm a <a>FrontEnd developer</a> based in <a>Bristol</a>. I blend a
            keen eye for design with the technical prowess of software
            engineering. Frontend is my playground, but my curiosity spans the
            full spectrum of development. I'm all about creating seamless,
            efficient experiences from front to back. Dive into my work, see
            what I'm about, and let's connect to build something great together!
          </div>
          <a href="mailto:hamsenasir97@gmail.com" className="intro-contact">
=======
            I'm a <a>Full Stack Developer</a> based in <a>Bristol</a>. I have
            great interest in software development, artificial
            intelligence ,big data, Web-3, and everything in between.
          </div>
          <a href="hamza2developer@gmail.com" className="intro-contact">
>>>>>>> 7ed38fb ( updated experience About pages)
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;

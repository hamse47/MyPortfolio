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
            I'm a <a>Full Stack Software Engineer</a> based in <a>Bristol</a>. I
            have great interest in Software Development, Artificial
            Intelligence, Big Data, Web-3, and everything in between. I'm all
            about developing seamless and effective software from front to back.
            Dive into my work, see what am about, and{" "}
            <a href="https://www.linkedin.com/in/hamza-odowa/">Lets connect</a>{" "}
            to build something great.
          </div>
          <a href="hamza2developer@gmail.com" className="intro-contact">
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;

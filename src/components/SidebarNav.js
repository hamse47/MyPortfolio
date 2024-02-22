import React from "react";
import { Sidenav } from "rsuite";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component {
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
    const { expanded } = this.state;

    const links = [
      <a href="#intro">/Home</a>,
      <a href="#about">/About</a>,
      <a href="#experience">/Experience</a>,
      <a href="#projects">/Software-Projects</a>,
    ];

    return (
      <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <div>{link}</div>
                  </FadeInSection>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}
        <div className="sidebar-logos" href="/">
          <a href="mailto:hamsenasir97@gmail.com">
            <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/hamse47">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/hamza-odowa/">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
          <a href="https://twitter.com/HamseOdowa">
            <TwitterIcon style={{ fontSize: 21 }}></TwitterIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;

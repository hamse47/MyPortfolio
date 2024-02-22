import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const tech_stack = [
      "Javascript ES6+",
      "React.js",
      "Node.js",
      "Python",
      "HTML & CSS",
      "REST API",
      "Git",
      "MongoDB",
      "Material-UI",
    ];

    const one = (
      <p>
        I recently graduated from the{" "}
        <a href="https://www.uwe.ac.uk">University of West England</a> with a
        Bachelor of Science in Software Engineer for businesses. I focus on
        developing high-quality software that empowers businesses, with a keen
        interest in Full Stack Developer. As a dedicated problem solver, I'm
        excited to explore the endless possibilities at the intersection of
        technology, crafting new ideas, and expanding my knowledge in these
        cutting-edge fields.
      </p>
    );
    const two = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:hamza2developer@gmail.com">hamza2developer@gmail.com</a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ About me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items.map((item, index) => (
                <FadeInSection key={index}>{item}</FadeInSection>
              ))}
              <p>Here are some technologies I have been working with:</p>
              <ul className="tech-stack">
                {tech_stack.map((tech_item, i) => (
                  <FadeInSection delay={`${i + 1}00ms`} key={tech_item}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                ))}
              </ul>
            </div>
            <div className="about-image">
              <img src={"/assets/me2.jpg"} alt="About Me" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

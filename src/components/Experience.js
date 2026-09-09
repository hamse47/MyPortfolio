import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

function Experience() {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header">
          <h2 className="section-title">/ Experience</h2>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
}

export default Experience;

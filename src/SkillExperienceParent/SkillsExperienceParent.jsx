import React from "react";
import Experience from "../Experience/Experience";
import Skillset from "../Skillset/Skillset";

import "./skillsExperienceParent.scss";

export default function SkillsExperienceParent() {

  return (
    <div className="skills-experience-container">
      {/* <Skillset /> */}
      <Experience />
    </div>
  )
}
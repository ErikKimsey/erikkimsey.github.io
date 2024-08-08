import React from "react";
import Experience from "../Experience/Experience";
import Skillset from "../Skillset/Skillset";

import Background from "../Background/Background";

import "./skillsExperienceParent.scss";

export default function SkillsExperienceParent() {

    return (
        <div className="skills-experience-container flex-row flex-wrap justify-between w-full">
            <Skillset />
            <div className="space w-1/3 md:w-full sm:w-full"></div>
            <Experience />
            <Background />
        </div>
    )
}
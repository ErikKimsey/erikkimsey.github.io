import React, { useState, useEffect, useRef } from "react";
import Experience from "../Experience/Experience";
import Skillset from "../Skillset/Skillset";

import "./skillsExperienceParent.scss";
import Background from "../Background/Background";

export default function SkillsExperienceParent() {
    const experienceRef = useRef();
    const expertiseRef = useRef();

    return (
        <div className="skills-experience-container">
            {/* <Skillset /> */}
            <div className="space"></div>
            <Experience />
            {/* <Background /> */}
        </div>
    )
}
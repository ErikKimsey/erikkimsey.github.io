import React, { useState, useEffect, useRef } from "react";
import Experience from "../Experience/Experience";
import Skillset from "../Skillset/Skillset";

import "./skillsExperienceParent.scss";
import Background from "../Background/Background";

export default function SkillsExperienceParent() {
    const experienceRef = useRef();
    const expertiseRef = useRef();

    return (
        <div className="skills-experience-container flex-row flex-wrap justify-between w-full">
            {/* <Skillset /> */}
            <div className="space w-1/3 md:w-full sm:w-full"></div>
            <Experience />
            {/* <Background /> */}
        </div>
    )
}
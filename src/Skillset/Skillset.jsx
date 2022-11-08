import React, { useState, useEffect } from "react";
import { } from "framer-motion";

import SkillsetItem from "./SkillsetItem";

import "./skillset.scss";

import { SKILLS } from "../__data/data";

export default function Skillset() {

    let [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        setSkillsData(SKILLS);
    }, [])

    return (
        <div className="skillsetContainer">
            <div className="skillsHeader">techn.__</div>

            {
                skillsData && skillsData.map((e) => {
                    return <SkillsetItem data={e} />
                })
            }
        </div>
    )
}
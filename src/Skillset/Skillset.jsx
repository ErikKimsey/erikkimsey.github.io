import React, { useState, useEffect } from "react";

import SkillsetItem from "./SkillsetItem";

import "./skillset.scss";

import { SKILLS } from "../__data/data";

export default function Skillset() {

    let [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        setSkillsData(SKILLS);
    }, [])

    return (
        <div className="skillsetContainer" id="skillset-container">
            <div className="itemContainer">
                {
                    skillsData && skillsData.map((e) => {
                        return <SkillsetItem data={e} key={e} />
                    })
                }
            </div>
        </div >
    )
}
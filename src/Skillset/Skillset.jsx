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
        <div className="skillsetContainer w-full lg:w-2/3 md:w-full sm:w-full xs:w-full" id="skillset-container">
            {/* <div className="skillsHeader"></div> */}
            <div className="skillset-background-image"></div>
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
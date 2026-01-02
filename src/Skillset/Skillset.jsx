import { useState, useEffect } from "react";
import SkillsetItem from "./SkillsetItem";
import "./skillset.scss";
import { SKILLS } from "../__data/data";

export default function Skillset() {
    let [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        setSkillsData(SKILLS);
    }, [])

    return (
        <div className="flex flex-col justify-center content-center items-center w-full overflow-scroll" id="">
            {/* <div className="skillset-background-image"></div> */}
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
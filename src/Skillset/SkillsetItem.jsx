import React, { useEffect, useState } from "react";

import QuickMarquee from "../Marquee/QuickMarquee";

import "./skillset.scss";

export default function SkillsetItem(props) {

    let { data } = props;

    let [discipline, setDiscipline] = useState();
    let [skills, setSkills] = useState();

    useEffect(() => {
        setDiscipline(data[0]);
        setSkills(data.slice(1));
    }, []);

    return (
        <div className="skillSetItem relative">
            {/* <QuickMarquee /> */}
            {discipline && <p className="z-10 skillset-label">{discipline}__</p>}
            <div className="skillItemsList z-10">
                {
                    skills && skills.map((e) => {
                        return <div className="skillItem z-10" key={e}>{e}</div>
                    })
                }
            </div>
        </div>
    )
}
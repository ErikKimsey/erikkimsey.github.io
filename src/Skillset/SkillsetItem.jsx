import React, { useEffect, useState } from "react";
import { } from "framer-motion";

import "./skillset.scss";

export default function SkillsetItem(props) {

    let { data } = props;

    let [discipline, setDiscipline] = useState();
    let [skills, setSkills] = useState();

    function handleHoverClick() {
        console.log("handling hover click");
    }

    useEffect(() => {
        setDiscipline(data[0]);
        console.log(data.slice(1));
        setSkills(data.slice(1));
    }, []);

    return (
        <div className="skillSetItem">
            {discipline && <h4>{discipline}</h4>}
            {
                skills && skills.map((e) => {
                    return <div className="skillItem">{e}</div>
                })
            }
        </div>
    )
}
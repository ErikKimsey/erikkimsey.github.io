import { useEffect, useState } from "react";


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
        <div className="w-full relative flex flex-col flex-wrap justify-start content-start px-2 my-1  rounded-md border-grayzDark bg-blaq bg-opacity-20 backdrop-blur-xl overflow-hidden">
            {discipline && <p className="z-10 skillset-label">{discipline}__</p>}
            <div className="flex flex-row flex-wrap justify-between content-between z-10">
                {
                    skills && skills.map((e) => {
                        return <div className="skillItem z-10 text-sm" key={e}>{e}</div>
                    })
                }
            </div>
        </div>
    )
}
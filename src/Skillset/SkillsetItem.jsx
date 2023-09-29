import React, { useEffect, useState } from "react";

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
    <div className="skillSetItem">
      {discipline && <h4>{discipline}__</h4>}
      <div className="skillItemsList">
        {
          skills && skills.map((e) => {
            return <div className="skillItem" key={e}>{e}</div>
          })
        }
      </div>
    </div>
  )
}
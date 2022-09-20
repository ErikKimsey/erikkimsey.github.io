import React, { useEffect, useState } from "react";

import "./experience.scss"


export default function ExperienceItem(props) {
    console.log(props);
    let { name, about, stack, dates, role } = props;

    return <div className="experienceItemContainer">
        <div className="expItemLabel">{name}</div>
        <div className="expItemRole">{role}</div>
        <div className="expItemStack">{stack}</div>
        <p className="expItemDate">{dates}</p>
        {/* <div className="expAboutList"> */}
        <>
            <ul className="expAboutList">
                {
                    about.map((e) => {
                        return <li className="expAboutListItem">{e}</li>
                    })
                }
            </ul>
        </>
        {/* </div > */}
    </div>
}
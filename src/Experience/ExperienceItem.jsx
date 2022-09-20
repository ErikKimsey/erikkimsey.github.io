import React, { useEffect, useState } from "react";

import "./experience.scss"


export default function ExperienceItem(props) {
    console.log(props);
    let { name, about, stack, dates, role, url, github } = props;

    return <div className="experienceItemContainer">
        <div className="expItemLabel">{name}</div>
        <div className="expItemRole">{role}</div>
        <div className="expItemStack">{stack}</div>
        <a href={url} className="expItemURL" target="_blank">{url}</a>
        {github && <a href={github} className="expItemGithub" target="_blank">{github}</a>}
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
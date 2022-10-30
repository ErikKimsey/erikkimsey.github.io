import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSoundcloud, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./experience.scss"


export default function ExperienceItem(props) {
    let { name, about, stack, dates, role, url, github } = props;

    return <div className="experienceItemContainer">
        <div className="expItemLabel">{name}</div>
        <div className="expItemRole">{role}</div>
        <div className="expItemStack">{stack}</div>

        <>
            <ul className="expAboutList">
                {
                    about.map((e) => {
                        return <li className="expAboutListItem" key={e}>{e}</li>
                    })
                }
            </ul>
        </>

        <div className="expItemLinkContainer">
            <>
                {url.length > 0 && <a href={url} className="expItemURL" target="_blank">
                    <FontAwesomeIcon icon={faLink} size="2x" />
                </a>}
            </>
            <>
                {github.length > 0 && <a href={github} className="expItemGithub" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>}
            </>
        </div>
        <p className="expItemDate">{dates}</p>


    </div>
}
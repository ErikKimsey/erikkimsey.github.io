import React, { useEffect, useState } from "react";

import "./experience.scss"
export default function ExperienceItem(props) {
    let { name, about, stack } = props;

    return <div className="experienceItemContainer">
        <div className="expItemLabel">{name}</div>
        <div className="expItemStack">{stack}</div>
        <div className="expItemAbout">{about}</div>
    </div>
}
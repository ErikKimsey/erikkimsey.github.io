import React, { FC, useState, useEffect } from 'react';

import githubIcon from "../assets/icons/github.svg";
import { ekLogo, circleCircTriLeft, circleDownTri, github } from "../assets/icons/index";

import "./menu.scss";

export default function Menu() {

    let [github, setGithub] = useState();

    return (
        <div className='menu-container'>
            {/* <div className='link-container'> */}
            <a href="github.com/erikkimsey" target="_blank" className='link'>
                {circleCircTriLeft && <img src={circleCircTriLeft} className="link-icon" />}
            </a>
            <a href="github.com/erikkimsey" target="_blank" className='link'>
                {circleDownTri && <img src={circleDownTri} className="link-icon" />}
            </a>
            {/* </div> */}
        </div>
    );
}

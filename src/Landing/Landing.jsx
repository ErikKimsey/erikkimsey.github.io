import React, { useRef, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPrint } from "@fortawesome/free-solid-svg-icons";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ExperienceMarquee from "../Experience/ExperienceMarquee";
import About from "../About/About";
import Menu from "../Menu/Menu";


function Landing(props) {
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });

    useEffect(() => {
        if (sketchRef.current) {
            setDimens({ w: sketchRef.current.offsetWidth, h: sketchRef.current.offsetHeight });
        }
    }, [])

    return (
        <div
            className="landing-container"
        >
            <ExperienceMarquee />
            <Banner timerTime={3000} />
            {/* <About /> */}
            <div className="landingLinksContainer">

                {/* <a target="_blank" href={resume}>
                    <FontAwesomeIcon icon={faFloppyDisk} size="3x" />
                </a>
                <div className="resumeText">Resume</div> */}
            </div>
        </div>
    );
}

export default Landing;

import React, { useRef, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPrint } from "@fortawesome/free-solid-svg-icons";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ExperienceMarquee from "../Experience/ExperienceMarquee";
import Marquee from "../Marquee/Marquee";
import Experience from "../Experience/Experience";
import Skillset from "../Skillset/Skillset";


import { LANGUAGES, FRONTEND, BACKEND, THREE_D, DESIGN_TOOLS, MULTIMEDIA_WEB, THE_WHO_AM_I, CONTACT_DATA, AUDIO_VIDEO } from "../__data/data";

let d = ["React", "React Native", "Unity3D", "C#", "Blender", "Next.js", "Node.js"];

function SplitData(str) {
    let arr = str.split(" ");
    return arr;
}


function Landing(props) {
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });

    let [d, setD] = useState();
    let [sD, setSubD] = useState();
    let [core, setCore] = useState();

    useEffect(() => {
        if (sketchRef.current) {
            setDimens({ w: sketchRef.current.offsetWidth, h: sketchRef.current.offsetHeight });
        }

        // let dot = document.createElement("div");
        // dot.setAttribute("class", "dot");
        // dot.setAttribute("style", "background: #ff00ff");
        // dot.style.position = "absolute";
        // dot.style.height = "100px";
        // dot.style.width = "100px";

    }, [])

    return (
        <div
            className="landing-container"
            id="landing-container"
            ref={sketchRef}
        >
            <Banner timerTime={3000} />
            {/* <Experience /> */}
            {/* <About /> */}
            {/* <div className="landingLinksContainer">
            </div> */}
        </div>
    );
}

export default Landing;

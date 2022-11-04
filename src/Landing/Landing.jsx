import React, { useRef, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPrint } from "@fortawesome/free-solid-svg-icons";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ExperienceMarquee from "../Experience/ExperienceMarquee";
import Marquee from "../Marquee/Marquee";
import Experience from "../Experience/Experience";

import { LANGUAGES, FRONTEND, BACKEND, THREE_D, DESIGN_TOOLS, MULTIMEDIA_WEB, THE_WHO_AM_I, CONTACT_DATA, AUDIO_VIDEO } from "../__data/data";

let d = ["React", "React Native", "Unity3D", "C#", "Blender", "Next.js", "Node.js"];

function SplitData(str) {
    let arr = str.split(" ");
    console.log(arr);
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
    }, [])

    return (
        <div
            className="landing-container"
            id="landing-container"
        >
            <Banner timerTime={3000} />
            {/* <Experience /> */}
            {/* <About /> */}
            <div className="landingLinksContainer">
                {LANGUAGES && <Marquee customStyles={{ bottom: "1050px" }} customDelay={0.1}
                    customDur={10} data={LANGUAGES} directionLeft={false} />}
                {FRONTEND && <Marquee customStyles={{ bottom: "950px" }} customDelay={0.5}
                    customDur={15} data={FRONTEND} directionLeft={true} />}
                {THREE_D && <Marquee customStyles={{ bottom: "350px" }} customDelay={0.3}
                    customDur={20} data={THREE_D} directionLeft={false} />}
                {DESIGN_TOOLS && <Marquee customStyles={{ bottom: "750px" }} customDelay={0.2}
                    customDur={15} data={DESIGN_TOOLS} directionLeft={true} />}
                {AUDIO_VIDEO && <Marquee customStyles={{ bottom: "150px" }} customDelay={0.9}
                    customDur={6} data={AUDIO_VIDEO} directionLeft={false} />}
                {BACKEND && <Marquee customStyles={{ bottom: "650px" }} customDelay={0.1}
                    customDur={10} data={BACKEND} directionLeft={true} />}
                {THE_WHO_AM_I && <Marquee customStyles={{ bottom: "250px" }} customDelay={0.9}
                    customDur={6} data={THE_WHO_AM_I} directionLeft={true} />}
            </div>
        </div>
    );
}

export default Landing;

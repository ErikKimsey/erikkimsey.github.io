import React, { useRef, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPrint } from "@fortawesome/free-solid-svg-icons";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ExperienceMarquee from "../Experience/ExperienceMarquee";
import Marquee from "../Marquee/Marquee";

let d = ["React", "React Native", "Unity3D", "C#", "Blender", "Next.js", "Node.js"];


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
            id="landing-container"
        >
            <Banner timerTime={3000} />
            {/* <About /> */}
            <div className="landingLinksContainer">
                <Marquee customStyles={{ bottom: "1050px" }} customDelay={0.1}
                    customDur={5} data={d} directionLeft={false} />
                <Marquee customStyles={{ bottom: "950px" }} customDelay={0.1}
                    customDur={5} data={d} directionLeft={true} />
                <Marquee customStyles={{ bottom: "350px" }} customDelay={1}
                    customDur={10} data={d} directionLeft={false} />
                <Marquee customStyles={{ bottom: "750px" }} customDelay={0.5}
                    customDur={15} data={d} directionLeft={true} />
                <Marquee customStyles={{ bottom: "150px" }} customDelay={0.9}
                    customDur={20} data={d} directionLeft={false} />
                <Marquee customStyles={{ bottom: "650px" }} customDelay={0.1}
                    customDur={8} data={d} directionLeft={true} />
                <Marquee customStyles={{ bottom: "250px" }} customDelay={1.1}
                    customDur={10} data={d} directionLeft={true} />

                {/* <a target="_blank" href={resume}>
                    <FontAwesomeIcon icon={faFloppyDisk} size="3x" />
                    </a>
                <div className="resumeText">Resume</div> */}
            </div>
        </div>
    );
}

export default Landing;

import React, { useRef, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPrint } from "@fortawesome/free-solid-svg-icons";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ExperienceMarquee from "../Experience/ExperienceMarquee";
import Marquee from "../Marquee/Marquee";
import Experience from "../Experience/Experience";

import { data, subData, coreSkills } from "./data";

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

        setD(SplitData(subData));
        setSubD(SplitData(subData));
        setCore(coreSkills);
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
                {d && <Marquee customStyles={{ bottom: "1050px" }} customDelay={0.1}
                    customDur={5} data={d} directionLeft={false} />}
                {sD && <Marquee customStyles={{ bottom: "950px" }} customDelay={0.1}
                    customDur={5} data={sD} directionLeft={true} />}
                {core && <Marquee customStyles={{ bottom: "350px" }} customDelay={1}
                    customDur={10} data={core} directionLeft={false} />}
                {core && <Marquee customStyles={{ bottom: "750px" }} customDelay={0.5}
                    customDur={15} data={core} directionLeft={true} />}
                {d && <Marquee customStyles={{ bottom: "150px" }} customDelay={0.9}
                    customDur={20} data={d} directionLeft={false} />}
                {sD && <Marquee customStyles={{ bottom: "650px" }} customDelay={0.1}
                    customDur={8} data={sD} directionLeft={true} />}
                {core && <Marquee customStyles={{ bottom: "250px" }} customDelay={1.1}
                    customDur={10} data={core} directionLeft={true} />}
            </div>
        </div>
    );
}

export default Landing;

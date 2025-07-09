import React, { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ThreeBackground from "../ThreeBackground/ThreeBackground";


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

    }, [])

    return (
        <div
            className="landing-container"
            id="landing-container"
            ref={sketchRef}
        >
            {/* <ThreeBackground /> */}
            <Banner timerTime={3000} />
        </div>
    );
}


export default Landing;

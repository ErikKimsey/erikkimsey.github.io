import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ThreeBackground from "../ThreeBackground/ThreeBackground";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent"


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
            className="landing-container fixed top-1/4 left-12 h-auto flex flex-row justify-center content-center p-10"
            ref={sketchRef}
        >

            <div className="flex flex-col content-start">
                <Banner timerTime={3000} />
                <SkillsExperienceParent />
            </div>
            <div className=" w-auto h-full bg-cyan-300 flex flex-col justify-center items-center content-center">
                farts
            </div>
        </div>
    );
}


export default Landing;
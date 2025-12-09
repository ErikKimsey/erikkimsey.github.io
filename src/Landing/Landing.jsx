import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ThreeBackground from "../ThreeBackground/ThreeBackground";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent"
import VideoBackground from "../VideoBackground/VideoBackground";


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
            className="fixed  top-1/4 left-1 lg:left-10 flex flex-row flex-wrap p-2 sm:p-2 lg:p-8 "
            ref={sketchRef}
        >

            <div className="w-auto sm:w-full md:w-1/2 lg:w-1/2 flex flex-col overflow-clip">
                <Banner timerTime={3000} />
                <SkillsExperienceParent />
            </div>
            <div className="w-auto sm:w-11/12 md:w-1/2 lg:w-1/2 flex">
                <VideoBackground/>
            </div>
        </div>
    );
}


export default Landing;
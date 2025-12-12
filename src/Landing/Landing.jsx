import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ThreeBackground from "../ThreeBackground/ThreeBackground";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent"
import VideoBackground from "../VideoBackground/VideoBackground";
import { LandingContentBannerTemplate } from "./LandingContentBannerTemplate";
import FreelanceComponentAndModal from "../FreelanceComponentAndModal/FreelanceComponentAndModal"


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
        <LandingContentBannerTemplate>

            <div className="w-11/12 lg:w-1/2 flex flex-col flex-wrap overflow-clip">
                <Banner timerTime={3000} />
                <SkillsExperienceParent />
            </div>
            <div className="w-11/12 lg:w-1/2 flex">
                <VideoBackground />
            </div>


            <FreelanceComponentAndModal />

        </LandingContentBannerTemplate>
    );
}


export default Landing;
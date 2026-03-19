import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import About from "../About/About";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent"
import VideoBackground from "../VideoBackground/VideoBackground";
import { LandingContentBannerTemplate } from "./LandingContentBannerTemplate";
import FreelanceComponentAndModal from "../FreelanceComponentAndModal/FreelanceComponentAndModal"
import LandingImageGallery from "./LandingImageGallery";


let d = ["React", "React Native", "Unity3D", "C#", "Blender", "Next.js", "Node.js"];


function SplitData(str) {
    let arr = str.split(" ");
    return arr;
}

function Landing(props) {
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });
    const [isFreelanceOpen, setIsFreelanceOpen] = useState(false);

    let [d, setD] = useState();
    let [sD, setSubD] = useState();
    let [core, setCore] = useState();


    useEffect(() => {
        if (sketchRef.current) {
            setDimens({ w: sketchRef.current.offsetWidth, h: sketchRef.current.offsetHeight });
        }

    }, [])

    function openFreelanceModal() {
        setIsFreelanceOpen(true);
    }

    function toggleFreelanceModal() {
        setIsFreelanceOpen((prev) => !prev);
    }

    function closeFreelanceModal() {
        setIsFreelanceOpen(false);
    }


    return (
        <LandingContentBannerTemplate>
            <div className="w-full flex flex-col flex-wrap overflow-clip pl-2 lg:pl-32">

                {/* <LandingImageGallery /> */}
                <Banner timerTime={3000} />
                <SkillsExperienceParent onOpenFreelance={openFreelanceModal} />
                {/* <About /> */}
            </div>
            {/* <div className="w-full lg:w-1/2 flex">
                <VideoBackground />
            </div> */}

            <FreelanceComponentAndModal
                freelance={isFreelanceOpen}
                onToggleFreelance={toggleFreelanceModal}
                onCloseFreelance={closeFreelanceModal}
            />
        </LandingContentBannerTemplate>


    );
}


export default Landing;
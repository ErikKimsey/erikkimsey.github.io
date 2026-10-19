import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import { motion } from "framer-motion";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent"
import { LandingContentBannerTemplate } from "./LandingContentBannerTemplate";
import FreelanceComponentAndModal from "../FreelanceComponentAndModal/FreelanceComponentAndModal"
import SeekingWork from "../SeekingWork/SeekingWork";



let d = ["React", "React Native", "Unity3D", "C#", "Blender", "Next.js", "Node.js"];


function SplitData(str) {
    let arr = str.split(" ");
    return arr;
}

function Landing(props) {
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });
    const [isFreelanceOpen, setIsFreelanceOpen] = useState(false);

    const backgroundGeometry = "/Users/erikkimsey/Desktop/erik_kimsey_portfolio_playground/src/assets/images/hemisphere_gray_purple.png";

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
            <div className="w-full flex flex-col flex-wrap overflow-clip p-4 " role="main">
                <Banner timerTime={3000} />
                <FreelanceComponentAndModal
                    freelance={isFreelanceOpen}
                    onToggleFreelance={toggleFreelanceModal}
                    onCloseFreelance={closeFreelanceModal}
                />
                <SkillsExperienceParent onOpenFreelance={openFreelanceModal} onOpenEmail={props.onOpenEmail} onOpenExperience={props.onOpenExperience} />
            </div>
        </LandingContentBannerTemplate>
    );
}

export default Landing;
import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import { motion } from "framer-motion";
import About from "../About/About";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent"
import VideoBackground from "../VideoBackground/VideoBackground";
import { LandingContentBannerTemplate } from "./LandingContentBannerTemplate";
import FreelanceComponentAndModal from "../FreelanceComponentAndModal/FreelanceComponentAndModal"
import EmailJSModal from "../EmailJS/EmailJSModal";
import ThreeBackground from "../ThreeBackground/ThreeBackground";
import LandingImageGallery from "../ImageGallery/LandingImageGallery";



let d = ["React", "React Native", "Unity3D", "C#", "Blender", "Next.js", "Node.js"];


function SplitData(str) {
    let arr = str.split(" ");
    return arr;
}

function Landing(props) {
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });
    const [isFreelanceOpen, setIsFreelanceOpen] = useState(false);
    const [isEmailOpen, setIsEmailOpen] = useState(false);

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

    function openEmailModal() {
        setIsEmailOpen(true);
    }

    function closeEmailModal() {
        setIsEmailOpen(false);
    }

    return (
        <LandingContentBannerTemplate>
            <img src={"https://res.cloudinary.com/dfez8ez2g/image/upload/v1774021674/hemisphere_gradient_to_alpha_u34qdg.png"} className="fixed bg-cover bottom-0 lg:top-0 lg:right-0 rotate-270 lg:rotate-0 -z-10"></img>

            {/* <ThreeBackground /> */}

            <div className="w-full flex flex-col flex-wrap overflow-clip pl-2 lg:pl-32">
                {/* <LandingImageGallery /> */}
                <Banner timerTime={3000} />
                <SkillsExperienceParent onOpenFreelance={openFreelanceModal} onOpenEmail={openEmailModal} />
                <FreelanceComponentAndModal
                    freelance={isFreelanceOpen}
                    onToggleFreelance={toggleFreelanceModal}
                    onCloseFreelance={closeFreelanceModal}
                />
            </div>

            <EmailJSModal isOpen={isEmailOpen} onClose={closeEmailModal} />

            <LandingRightArea />
        </LandingContentBannerTemplate>
    );
}

function LandingRightArea() {

    let ref = useRef();

    return (
        <motion.div
            className="w-full lg:w-1/2 h-72 lg:h-[50vh] text-6xl md:text-6xl lg:text-9xl m-0 p-0 flex-col overflow-hidden z-10 border-0  lg:border-l-[1px] border-grayzDark px-2 pt-6 lg:pt-0 lg:pl-10"
            ref={ref}
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 0,
            }}
        >
            <div className="flex flex-col justify-around w-full h-full text-lg">
                <div> Professional Tokyo Shinjuku ROM virus access link man ICE shattered geodesic implant blue AI misinformation corporate-grade. </div>
                <br />
                <div>  Software deck jack in dub ganja steel AI Russian Night City dub scan prosthetic cryptic Harajuku.</div>
            </div>
        </motion.div>
    )
}

export default Landing;
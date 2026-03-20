import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import About from "../About/About";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent"
import VideoBackground from "../VideoBackground/VideoBackground";
import { LandingContentBannerTemplate } from "./LandingContentBannerTemplate";
import FreelanceComponentAndModal from "../FreelanceComponentAndModal/FreelanceComponentAndModal"
import EmailJSModal from "../EmailJS/EmailJSModal";



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
            <img src={"https://res.cloudinary.com/dfez8ez2g/image/upload/v1774021674/hemisphere_gradient_to_alpha_u34qdg.png"} className="fixed bg-cover bottom-0 lg:top-0 lg:right-0 rotate-270 lg:rotate-0 -z-2"></img>

            <div className="w-full flex flex-col flex-wrap overflow-clip pl-2 lg:pl-32">

                <Banner timerTime={3000} />
                <SkillsExperienceParent onOpenFreelance={openFreelanceModal} onOpenEmail={openEmailModal} />
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

            <EmailJSModal isOpen={isEmailOpen} onClose={closeEmailModal} />
        </LandingContentBannerTemplate>


    );
}


export default Landing;
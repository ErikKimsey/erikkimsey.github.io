import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import { motion } from "framer-motion";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent"
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

    useEffect(() => {
        if (isEmailOpen) {
            document.body.classList.add("hide-footer");
        } else {
            document.body.classList.remove("hide-footer");
        }

        return () => {
            document.body.classList.remove("hide-footer");
        };
    }, [isEmailOpen])

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

            {/* <div className="fixed w-full h-full bg-blaq mix-blend-hue -z-10"></div> */}

            {/* <ThreeBackground /> */}

            <div className="w-full flex flex-col flex-wrap overflow-clip bg-blaq p-4 " role="main">
                {/* <LandingImageGallery /> */}
                <Banner timerTime={3000} />
                <FreelanceComponentAndModal
                    freelance={isFreelanceOpen}
                    onToggleFreelance={toggleFreelanceModal}
                    onCloseFreelance={closeFreelanceModal}
                />

                <EmailJSModal isOpen={isEmailOpen} onClose={closeEmailModal} />

                {/* <LandingRightArea openEmail={openEmailModal} /> */}
                <SkillsExperienceParent onOpenFreelance={openFreelanceModal} onOpenEmail={openEmailModal} />
            </div>
        </LandingContentBannerTemplate>
    );
}

function LandingRightArea({ openEmail }) {

    let [p1Array, setP1Array] = useState([]);
    let [p2Array, setP2Array] = useState([]);
    let [finalString, setFinalString] = useState("");


    const paragraph1 = "  I have over 7 years of professional experience weaving UX best-practices, UI & graphic design, and software engineering.  The results are the creation of engaging and intutive user-experiences which are specific to each product's target-market."
    const paragraph2 = "The world evolves quickly.  And I enjoy evolving with it, keeping current to design trends and  technologies."
    const paragraph3Before = "If you're looking for an experienced UI developer, who has a keen sense of aesthetic and usability, ";
    const paragraph3Click = "please reach out!";
    // const paragraph3 = "I like pushing the possibilities of a successful user-experience. Incorporating tactility, visual and auditory feedback, to provide user guidance and confidence.   Be it by engaging in rapid prototyping, experimentation, and R&D. Utilizing under-used APIs native to any platform, and elements of multimedia."
    // const paragraph4 = "Be it by engaging in current research in HCI rapid prototyping and experimentation, and R&DUtilizing under-used APIs native to any platform, and elements of multimedia.", I enjoy utilizing overlooked APIs that are native to platforms.  E.g., Javascript's Web Audio API, Web MIDI API, "
    const paragraphAnimation = {
        initial: { x: "120%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
    };


    let ref = useRef();

    return (
        <div
            className="w-full lg:w-1/2 h-72 lg:h-[80vh] text-6xl md:text-6xl lg:text-9xl m-0 mt-2 p-0 pt-10 flex-col overflow-hidden z-10 border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-grayzDark px-2 pt-6 lg:pt-0 lg:pl-10"

        >

            {/* https://res.cloudinary.com/dfez8ez2g/image/upload/q_auto/f_auto/v1775484678/droopy_e_fvyf3s.png */}
            <div className="flex flex-col justify-start lg:justify-end w-full h-full text-lg overflow-clip">
                {paragraph1 &&
                    <motion.p
                        className="text-sm lg:text-base py-2"
                        initial={paragraphAnimation.initial}
                        animate={paragraphAnimation.animate}
                        transition={{ ...paragraphAnimation.transition, delay: 1 }}
                    >
                        {paragraph1}
                        {/* I have over 7 years of professional experience weaving UX best-practices, UI & graphic design, and software engineering.  The results are the creation of engaging and intutive user-experiences which are specific to each product's target-market. */}
                    </motion.p>
                }
                <br />
                <br />
                {/* <motion.p
                    className="text-sm lg:text-base py-2"
                    initial={paragraphAnimation.initial}
                    animate={paragraphAnimation.animate}
                    transition={{ ...paragraphAnimation.transition, delay: 1.1 }}
                >
                    {paragraph2 &&
                        paragraph2
                    }
                    <br />
                    <br />
                    Further, Imagine tactility, visual and auditory feedback to provide user guidance and confidence. Pushing the possibilities of a successful user-experience.  Be it by:

                        <ul role="list" style={{ listStyle: "inside", listStyleType: "disc" }} className="list-disc">
                            <li >engaging in rapid prototyping, experimentation, and R&D.</li>
                            <li>Utilizing under-used APIs native to any platform, and elements of multimedia. </li>
                        </ul>
                </motion.p> */}
                {/* <motion.p
                    className=" py-2 text-pinkz text-sm lg:text-base overflow-clip"
                    initial={paragraphAnimation.initial}
                    animate={paragraphAnimation.animate}
                    transition={{ ...paragraphAnimation.transition, delay: 1.1 }}
                >
                    {paragraph3Before}<span onClick={openEmail} className="cursor-pointer text-sm lg:text-base hover:text-yellowz text-tealz hover:scale-125 transition-all duration-500">{paragraph3Click}</span>
                </motion.p> */}
            </div>

        </div >
    )
}

export default Landing;
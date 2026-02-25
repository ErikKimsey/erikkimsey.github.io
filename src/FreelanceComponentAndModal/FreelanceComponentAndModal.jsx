import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Banner/banner.scss";
import mobile from "../assets/images/mobile_dev.png";
import gamedev from "../assets/images/game_dev.PNG";
import uimockup from "../assets/images/web_proto.WEBP"
import uiconsult from "../assets/images/ui_ux_consult.WEBP"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DEALS_PACKAGES = [
    {
        label: "New UI features / UI fixes.",
        price: "$600",
        description: "Design and implement a new feature for your website or mobile app (e.g., adding a user settings page, a contact form with validation, a basic dashboard view), fully integrated, responsive, and ready to deploy.",
        image: mobile,
        type: "dev"
    },
    {
        label: "UI Mockup (demonstrating core functionality)",
        price: "$1200",
        description: "A UI mockup translates your ideas into a clean, realistic interface design that mirrors the intended final product. It serves as a visual and functional blueprint for further development and a decision-making tool for your team.",
        image: uimockup,
        type: "dev"
    },
    {
        label: "2D / 3D Video Game Mockup",
        price: "$1100",
        description: "A 2D or 3D game mockup demonstrating core visuals, basic gameplay flow, and camera perspective—using placeholder or custom assets as needed—ideal for pitching or early validation, delivered as a playable or video demo.",
        image: gamedev,
        type: "dev"

    },
    {
        label: "UI / UX Design Consultation",
        price: "$400",
        description: "Review your website or app’s UI/UX, and provide a concise set of actionable recommendations—covering usability, visual hierarchy, and user flow, along with annotated screenshots or wireframes, delivered within 48 hours after an initial consultation.",
        image: uiconsult,
        type: "design"
    },
    {
        label: "Brand Guidelines",
        price: "$700",
        description: "Create a concise brand guidelines document defining your core visual identity. Including color palette, typography, logo usage, and UI styling examples —so that your website, app, and marketing assets stay consistent and professional, delivered within 5–7 days.",
        image: "../assets/images/game_dev.PNG",
        type: "design"
    },
    {
        label: "3D Modeling",
        price: "$240",
        description: "3D models aren't just for video games.  They are also very practical.  Used daily in fields from e-commerce to architecture, from scientific research to hands-on educational tools.",
        image: "../assets/images/game_dev.PNG",
        type: "3D"
    }
]


function DealPackage({ index, pack }) {

    const { label, price, description, image } = pack;
    let i = 0;

    function hovering() {
        // play sound
    }

    return (
        (<motion.div
            // onHoverStart={() => hovering()}
            // whileHover={{ scale: 1.01 }}
            className="relative flex flex-col flex-wrap justify-start content-end p-4 m-2 w-full min-w-70 border-1 rounded-md border-grayzDark backdrop-blur-lg overflow-hidden">
            {/* <div className="absolute w-full h-full flex flex-row justify-end items-end -z-10">
                <img src={image} className="w-72 pt-12" />
            </div> */}

            <div className="flex flex-col w-full  p-4 m-2 bg-blaq bg-opacity-70 backdrop-blur-4xl overflow-hidden rounded-md">
                <div className="label-and-price flex flex-row content-start">
                    <div className=" text-pinkz text-4xl font-quantify font-black pb-4 w-full sm:w-full lg:w-2/3 text-left overflow-hidden z-20  border-spacing-x-12">{label}</div>
                </div>
                <div className="service-description font-black">
                    {description}
                </div>
                <div className=" w-full text-tealz font-quantify font-black text-4xl text-right overflow-hidden right-1 bottom-1 px-4 pb-0 pt-2 mb-0 lg:right-8 lg:bottom-4 bg-transparent">{price}</div>
                <div className="contact-container">
                    {/* 
                    - button to send message.
                    - 
                    */}
                </div>
                {/* <div className=" absolute  w-full text-purps font-bold font-quantify text-9xl text-right overflow-hidden top-1/4 -left-5 -z-10 opacity-20 -rotate-12">{price}</div> */}
            </div >
        </motion.div >)
    )
}

function FreelanceComponentAndModal() {

    let [freelance, setFreelance] = useState(false);

    function FreelanceTabClick() {
        setFreelance(!freelance);
    }

    function closeModal() {
        setFreelance(false);
    }

    return (
        <div>
            {/* <div className="freelance-button-tab fixed flex flex-row justify-center p-20 top-2 left-1 w-full h-48" > */}

            <motion.div
                initial={{ scale: 1, color: "#fcf", rotate: "-3deg" }}
                whileHover={{ scale: 1.02, color: "#faf", rotate: "-2deg" }}
                transition={{ duration: 0.3 }} className="fixed right-4 lg:right-18 top-1 lg:right-48 lg:top-10 textGlow font-neon text-center text-5xl lg:text-7xl text-grayz rotate-3" style={{ textShadow: "-2px -2px 10px #e0c, 3px 3px 10px #a0e", lineHeight: 1.1 }} onClick={FreelanceTabClick}>

                sales<br></br>monthly

            </motion.div >



            {/* </div > */}
            <AnimatePresence>{
                freelance &&
                <motion.div
                    className="fixed flex flex-row flex-wrap justify-center items-center z-[10] top-0 left-0 w-full h-full "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>


                    <motion.div
                        className="absolute inset-0 backdrop-blur-md "
                        onClick={closeModal}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative flex flex-row flex-wrap z-50 h-full max-h-[85vh] w-[95vw] max-w-5xl overflow-auto rounded-lg shadow-2xl bg-black bg-opacity-30 inset-shadow-indigo-500 scroll overflow-x-clip p-2 lg:p-10"
                        role="dialog"
                        aria-modal="true"
                        initial={{ y: 24, scale: 0.1, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 24, scale: 0.1, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                        <div className="flex flex-row items-end p-2 w-full">

                            <button
                                onClick={closeModal}
                                className="p-2 rounded hover:bg-offWhitez text-offWhitez hover:text-blaq duration-300"
                                aria-label="Close"
                            >
                                <FontAwesomeIcon icon={faXmark} className="w-8 h-8 text-xl" />
                            </button>
                        </div>

                        {/* <div className=" w-1/2 h-1/2 bg-fuchsia-900"> */}
                        <div className="w-full flex flex-col justify-center content-center ">
                            <div className="w-full p-2 font-extrabold px-1 sm:px-2 pb-1 text-9xl self-center font-quantify overflow-clip">ltd. 01/26</div>
                            <div className="text-2xl px-4 font-black">limited time</div>
                        </div>
                        {/* </div> */}
                        <div className="relative w-full flex flex-row flex-wrap justify-center ">
                            {
                                DEALS_PACKAGES.map((e, i) => {
                                    return <DealPackage index={i} pack={e} />
                                })
                            }
                        </div>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </div >
    )
}

export default FreelanceComponentAndModal;
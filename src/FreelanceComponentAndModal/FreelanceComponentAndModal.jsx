import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Banner/banner.scss";
import mobile from "../assets/images/mobile_dev.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DEALS_PACKAGES = [
    {
        label: "UI Features: Web & Mobile",
        price: "$600",
        description: "Design and implement a new feature for your website or mobile app (e.g., adding a user settings page, a contact form with validation, or a basic dashboard view), fully integrated, responsive, and ready to deploy.",
        image: mobile,
        type: "dev"
    },
    {
        label: "UI Mockup: Web & Mobile",
        price: "$1200",
        description: "A high-fidelity single-page web app mockup, that demonstrates: layout, UI components, and basic interactions.  Ideal for pitching, user testing, or stakeholder review.  Delivered as a clickable prototype or lightweight live demo.",
        image: "../assets/images/game_dev.PNG",
        type: "dev"
    },
    {
        label: "UI / UX Design Consultation",
        price: "$400",
        description: "Review your website or app’s UI/UX, and provide a concise set of actionable recommendations—covering usability, visual hierarchy, and user flow—along with annotated screenshots or wireframes, delivered within 48 hours after a 60-minute consultation.",
        image: "../assets/images/game_dev.PNG",
        type: "design"
    },
    {
        label: "2D / 3D Game Mockup",
        price: "$1100",
        description: "A 2D or 3D game mockup demonstrating core visuals, basic gameplay flow, and camera perspective—using placeholder or custom assets as needed—ideal for pitching or early validation, delivered as a playable or video demo.",
        image: "../assets/images/game_dev.PNG",
        type: "dev"

    },
    {
        label: "Brand Guidelines",
        price: "$700",
        description: "For a flat $700, I’ll create a concise brand guidelines document defining your core visual identity—including color palette, typography, logo usage, and UI styling examples—so your website, app, and marketing assets stay consistent and professional, delivered within 5–7 days.",
        image: "../assets/images/game_dev.PNG",
        type: "design"
    },
    {
        label: "3D Modeling",
        price: "$240",
        description: "3D models aren't just for video games.  They are also very practical.  Used daily in fields from e-commerce to architecture, from scientific research to hands-on educational tools.  Have you ever used the 'See in your room' feature of an e-commerce app?  Or, had a walk-through of your home before it was built?  Whether on a computer screen, in VR goggles, or through the screen of your iPhone, you were looking at a 3D model.",
        image: "../assets/images/game_dev.PNG",
        type: "3D"

    },
    {
        label: "Sound FX Design",
        price: "$120",
        description: "You need sounds that help tell a story, or set a mood, or make actions feel more realistic in a  digital product (e.g., website, video game, film project).  Add life to your visual product, utilizing your customer's auditory senses.",
        image: "../assets/images/game_dev.PNG",
        type: "audio"
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
            onHoverStart={() => hovering()}
            // whileHover={{ scale: 1.05 }}
            className="relative flex flex-col flex-wrap justify-start content-start p-2 m-2 w-full min-w-70 border-2 rounded-md border-grayzDark backdrop-blur-lg overflow-hidden">
            {/* <img src={image} className="absolute -z-10 -top-10 opacity-20"></img> */}
            <div className="flex flex-col w-full pb-2 my-0 pt-0 mt-0 bg-opacity-70 backdrop-blur-4xl overflow-hidden">
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
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="freelance-button-tab fixed flex flex-row justify-around items-center p-0 m-0 top-0 left-0 w-full h-12 " >
                <div className="bg-peach w-3/5 sm:w-3/5 lg:w-1/3 h-full bg-lime-300 rounded-br-3xl rounded-bl-3xl" onClick={FreelanceTabClick
                }>

                </div>
            </motion.div>
            <AnimatePresence>{
                freelance &&
                <motion.div
                    className="fixed flex flex-row flex-wrap justify-center items-center z-[10] top-0 left-0 w-full h-full "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>


                    <motion.div
                        className="absolute inset-0 backdrop-blur-sm "
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
                            <div className="text-4xl px-4 font-black text-sm">limited time ; starting prices are green.</div>
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
        </div>
    )
}

export default FreelanceComponentAndModal;
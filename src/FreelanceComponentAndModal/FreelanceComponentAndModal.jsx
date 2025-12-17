import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatTodayMMDDYYYY } from '../utils/temporalDate';
import "../Banner/banner.scss";



const DEALS_PACKAGES = [
    {
        label: "Web / mobile UI Features & Bug Extermination",
        price: "$200",
        description: "New features added to improve usability, functionality, or visual appeal, such as better navigation, faster performance, or modern design updates.  I will add new features or new functionality to your website / mobile app.  Modernize and freshen your site appearance.  Update your site or app with a professional user-experience.",
        type: "dev"
    },
    {
        label: "Single-Page Web App",
        price: "$960",
        description: "A simple, early version of a website or online application used to demonstrate how it will look and function, before it is fully built. This helps future designers, developers, and stakeholders test ideas, gather feedback, and make improvements without investing a lot of time or money. E.g., clickable mockup, a basic dashboard displaying sample charts of data, or wireframe of a mobile-friendly booking app that lets users step through making a reservation.",
        type: "dev"

    },
    {
        label: "Single-Page Mobile App",
        price: "$960",
        description: "A simple, early version of a website or online application used to demonstrate how it will look and function, before it is fully built. This helps future designers, developers, and stakeholders test ideas, gather feedback, and make improvements without investing a lot of time or money. E.g., clickable mockup, a basic dashboard displaying sample charts of data, or wireframe of a mobile-friendly booking app that lets users step through making a reservation.",
        type: "dev"

    },
    {
        label: "UI / UX Design Consultation",
        price: "$150",
        description: "Appear fresh and confident, and know using your website or app won't require guess-work to navigate.  Whether you like it or not, the success of your business or organization hinges on the quality of your digital presence.  The 'UI' presents important content beautifully.  The 'UX' makes sure the content is easily accessible.",
        type: "design"
    },
    {
        label: "Brand Creative Brief",
        price: "$250",
        description: "The public is greatly influenced by the colors, the shapes, and the fonts associated with your business or organization.  A design brief is document of identity.  Something to hand to future designers, to save time and money.  It's the outcome of exploring: what appeals to your target demographic and your aesthetic preferences vis-a-vis evidence-based marketing psychology.",
        type: "design"
    },
    {
        label: "Video Game prototype (single scene)",
        price: "$1048",
        description: "A 'prototype' or 'proof of concept' is an inexpensive functional example of your idea.  A  tangible simulacrum that will allow you to assess a product's viability.  Further, it's what investors want to put in their hands, for the same purpose. I.e., the 'proof-of-concept.",
        type: "dev"

    },
    {
        label: "3D Modeling",
        price: "$150",
        description: "3D models aren't just for video games.  They are also very practical.  Used daily in fields from e-commerce to architecture, from scientific research to hands-on educational tools.  Have you ever used the 'See in your room' feature of an e-commerce app?  Or, had a walk-through of your home before it was built?  Whether on a computer screen, in VR goggles, or through the screen of your iPhone, you were looking at a 3D model.",
        type: "3D"

    },
    {
        label: "Sound FX Design",
        price: "$100",
        description: "You need sounds that help tell a story, or set a mood, or make actions feel more realistic in a  digital product (e.g., website, video game, film project).  Add life to your visual product, utilizing your customer's auditory senses.",
        type: "audio"
    }
]

function DealPackage({ index, pack }) {

    const { label, price, description } = pack;

    return (
        // index % 2 !== 0 ?
        (<div className="relative flex flex-wrap justify-start content-start black p-2 m-4 h-72 sm:w-96 md:w-96 lg:w-96 min-w-70
             border-2 rounded-md  border-stone-400 backdrop-blur-lg">
            <div className="flex flex-col w-full pb-2 my-0 pt-0 mt-0 bg-black bg-opacity-70 backdrop-blur-4xl">
                <h1 className=" w-full text-pinkz text-xl font-quantify font-bold pb-1 text-left">{label}</h1>
                <div className="w-full text-peach font-bold font-quantify text-lg">{price}</div>
            </div>
            <div className="flex flex-col content-start justify-start w-full sm:w-full md:w-1/2 lg:w-full p-0 m-0 ">
                <div className="text-black overflow-scroll text-sm">{description}</div>
            </div>
        </div>)
    )
}


function FreelanceComponentAndModal() {

    let [freelance, setFreelance] = useState(false);
    let [date, setDate] = useState()

    useEffect(() => {
        setDate(formatTodayMMDDYYYY());
    }, [])

    function FreelanceTabClick() {
        setFreelance(!freelance);
    }

    function closeModal() {
        setFreelance(false);
    }



    return (
        <div>
            <div className="freelance-button-tab fixed flex flex-row justify-around items-center p-0 m-0 top-0 left-0 w-full h-24 " >
                <div className="w-3/5 sm:w-3/5 lg:w-1/3 h-full bg-lime-300 rounded-br-3xl rounded-bl-3xl" onClick={FreelanceTabClick
                }>

                </div>
            </div>
            <AnimatePresence>{
                freelance &&
                <motion.div
                    className="fixed flex flex-row flex-wrap justify-center items-center z-[10] top-0 left-0 w-full h-full "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>


                    <motion.div
                        className="absolute inset-0 bg-white/50 backdrop-blur-sm "
                        onClick={closeModal}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="relative flex flex-row flex-wrap z-50 h-full max-h-[85vh] w-[95vw] max-w-5xl overflow-auto rounded-lg shadow-2xl bg-black bg-opacity-90 inset-shadow-indigo-500 scroll overflow-x-clip p-2 lg:p-10"
                        role="dialog"
                        aria-modal="true"
                        initial={{ y: 24, scale: 0.1, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 24, scale: 0.1, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                        {/* <div className=" w-1/2 h-1/2 bg-fuchsia-900"> */}
                        <div className="w-full flex flex-col justify-center content-center ">
                            <div className="text-4xl font-black text-center">Packages</div>
                            <div className="w-full p-2 font-extrabold px-10 sm:px-2 text-md sm:text-md lg:text-md text-center self-center">Available to a limited time.</div>
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
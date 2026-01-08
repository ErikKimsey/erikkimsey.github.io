import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ModalBackdrop from "./ModalBackdrop";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/experienceModal.scss"

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

export default function ExperienceModal(props) {
    let { name, about, stack, dates, role, url, github, handleClose } = props;


    useEffect(() => {
        let foot = document.querySelector(".footerContainer");
        foot.style.zIndex = -10;

        return () => {
            let foot = document.querySelector(".footerContainer");
            foot.style.zIndex = 100;
        }
    }, [])

    return (
        <AnimatePresence>
            <motion.div
                className="fixed flex flex-row flex-wrap justify-center items-center z-[10] top-0 left-0 w-full h-full "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>

                <motion.div
                    className="absolute inset-0 backdrop-blur-md "
                    onClick={handleClose}
                    aria-hidden="true"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />

                <motion.div
                    className="relative flex flex-col flex-wrap z-1000 h-full max-h-[85vh] w-[95vw] max-w-5xl overflow-auto rounded-lg shadow-2xl bg-black bg-opacity-100 inset-shadow-indigo-500 scroll overflow-x-clip p-2 lg:p-10"
                    role="dialog"
                    aria-modal="true"
                    initial={{ y: 24, scale: 0.1, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: 24, scale: 0.1, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                >
                    <div className="flex flex-row items-end p-2 w-full">
                        <button
                            onClick={handleClose}
                            className="p-2 rounded hover:bg-offWhitez text-offWhitez hover:text-blaq duration-300"
                            aria-label="Close"
                        >
                            <FontAwesomeIcon icon={faXmark} className="w-8 h-8 text-xl" />
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full flex flex-col justify-center content-center ">
                            <div className="text-purps text-2xl">{role}</div>
                            <div className="text-pinkz text-2xl">{name}</div>
                        </div>

                        <div className="flex flex-row">
                            <div className="text-2xl">{stack}</div>
                        </div>
                        <>
                            <ul className="expAboutList">
                                {
                                    about.map((e) => {
                                        return <li className="text-sm" key={e}>{e}</li>
                                    })
                                }
                            </ul>
                        </>

                    </div>
                </motion.div>
            </motion.div>

        </AnimatePresence >
    )
}
// <ModalBackdrop onClick={handleClose}>
//     <motion.div
//         onClick={(e) => e.stopPropagation()}
//         className="experienceModalContainer modal"
//         variants={dropIn}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//     >
//         <div className="headerContainer">
//             <div className="expItemRole">{role}</div>
//             <div className="expItemStack">{stack}</div>
//             <div className="expItemLabel">{name}</div>
//         </div>

//         <>
//             <ul className="expAboutList">
//                 {
//                     about.map((e) => {
//                         return <li className="expAboutListItem" key={e}>{e}</li>
//                     })
//                 }
//             </ul>
//         </>

//         <div className="expItemLinkContainer">
//             <>
//                 {url.length > 0 && <a href={url} className="expItemURL" target="_blank">
//                     <FontAwesomeIcon icon={faLink} size="2x" />
//                 </a>}
//             </>
//             <>
//                 {github.length > 0 && <a href={github} className="expItemGithub" target="_blank">
//                     <FontAwesomeIcon icon={faGithub} size="2x" />
//                 </a>}
//             </>
//         </div>
//         <p className="expItemDate">{dates}</p>


//         <button onClick={handleClose}>Close</button>
//     </motion.div>
// </ModalBackdrop>



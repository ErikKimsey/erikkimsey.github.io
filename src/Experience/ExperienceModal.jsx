import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ModalBackdrop from "./ModalBackdrop";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/experienceModal.scss"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IMAGES_IMGUR } from "./IMAGES";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

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

function ExperienceImages(props) {
    const { imgs } = props;

    imgs = IMAGES_IMGUR.agconnect;

    return (
        <div className="relative flex flex-row h-72">
            {imgs && imgs.map((src, i) => (
                <img className="box-content object-cover m-2 " key={src.download_url} src={src.download_url} alt="An image." />
            ))}
        </div>
    )
}

export default function ExperienceModal(props) {
    let { name, about, stack, dates, role, url, github, imgs, handleClose } = props;

    const PLACEHOLDER_IMAGE = "https://res.cloudinary.com/dfez8ez2g/image/upload/v1768229678/addamms_shrug_w_text_er6glv.png";

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
                className="fixed flex flex-row flex-wrap justify-center items-center z-[10] top-0 left-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>

                <motion.div
                    className="absolute inset-0 backdrop-blur-md"
                    onClick={handleClose}
                    aria-hidden="true"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />

                <motion.div
                    className="relative flex flex-col z-1000 scroll w-[90vw] lg:w-[60vw] max-w-5xl rounded-lg shadow-2xl bg-blaq bg-opacity-70 inset-shadow-indigo-500 p-2 lg:p-10"
                    role="dialog"
                    aria-modal="true"
                    initial={{ y: 24, scale: 0.1, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: 24, scale: 0.1, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                >
                    <div className="flex flex-row items-end w-full justify-end ">
                        <button
                            onClick={handleClose}
                            className="rounded hover:bg-offWhitez text-offWhitez hover:text-blaq duration-300 w-12 h-12"
                            aria-label="Close"
                        >
                            <FontAwesomeIcon icon={faXmark} className="h-full text-xl" />
                        </button>
                    </div>
                    <div className="flex flex-col h-full py-4">
                        {/* <img src={img === '' ? PLACEHOLDER_IMAGE : img} className="w-full h-72 object-cover" /> */}
                        <ImageCarousel imgs={imgs} />
                        <div className="w-full flex flex-col justify-center content-center font-quantify text-4xl py-2 pt-8 overflow-clip">
                            <div className="text-purps overflow-clip">{role}</div>
                            <div className="text-pinkz overflow-clip">{name}</div>
                        </div>
                        <div className="flex flex-row py-2 font-comfortBold">
                            <div className="text-2xl">{stack}</div>
                        </div>

                        <>
                            <ul className="overflow-y-scroll list-inside list-disc text-offWhitez text-sm font-comfortBold  pt-4" role="list">
                                {
                                    about.map((e) => {
                                        return <li className="text-offWhitez list-item py-1" key={e}>{e}</li>
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



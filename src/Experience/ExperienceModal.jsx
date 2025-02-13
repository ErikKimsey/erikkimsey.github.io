import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSoundcloud, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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

    let [footer, setFooter] = useState();

    useEffect(() => {
        let foot = document.querySelector(".footerContainer");
        foot.style.zIndex = -10;

        return () => {
            let foot = document.querySelector(".footerContainer");
            foot.style.zIndex = 100;
        }
    }, [])

    return (
        <ModalBackdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="experienceModalContainer modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="headerContainer">
                    <div className="expItemRole">{role}</div>
                    <div className="expItemStack">{stack}</div>
                    <div className="expItemLabel">{name}</div>
                </div>

                <>
                    <ul className="expAboutList">
                        {
                            about.map((e) => {
                                return <li className="expAboutListItem" key={e}>{e}</li>
                            })
                        }
                    </ul>
                </>

                <div className="expItemLinkContainer">
                    <>
                        {url.length > 0 && <a href={url} className="expItemURL" target="_blank">
                            <FontAwesomeIcon icon={faLink} size="2x" />
                        </a>}
                    </>
                    <>
                        {github.length > 0 && <a href={github} className="expItemGithub" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>}
                    </>
                </div>
                <p className="expItemDate">{dates}</p>


                <button onClick={handleClose}>Close</button>
            </motion.div>
        </ModalBackdrop>
    )
}


import React, { useState, useEffect } from "react";
import { useScroll, useCycle } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faDownload, faFileArrowDown, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faSoundcloud, faLinkedin, faItchIo, faBehance } from "@fortawesome/free-brands-svg-icons";
import resume from "./erikkimsey_creativeEngineer_resume.pdf";


let peach = "#ffcea7";
let grn = "#52ED8B"
let inac = [{ label: "GH", color: "#f0f" }, { label: "SC", color: "#42D7A7" }, { label: "Be", color: "#AA5EF4" }, { label: "Re", color: peach }]

export default function Footer() {

    const { scrollY } = useScroll()
    let [isScrolling, setIsScrolling] = useState(false);
    let [isActive, setIsActive] = useState(false);

    useEffect(() => {

        return scrollY.onChange((e) => {
            // TODO
        });
    }, [])

    useEffect(() => {
        // console.log(isScrolling);
    }, [isScrolling])


    if (isActive) {
        return (
            <AnimatePresence exitBeforeEnter >
                <motion.div className="footerContainer"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 10, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setIsActive(false)}
                >
                    <div className="linksContainer">
                        <a target="_blank" href="https://github.com/erikkimsey">
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                        <a target="_blank" href="https://github.com/erikkimsey">
                            <FontAwesomeIcon icon={faSoundcloud} size="3x" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/erikkimsey">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </a>
                        <a target="_blank" href={resume}>
                            <FontAwesomeIcon icon={faFileArrowDown} size="3x" />
                        </a>
                        <div className="resumeText">Resume</div>
                    </div>
                    <div className="textItemContainer">
                        <div className="textItem">Erik Kimsey</div>
                        <div className="textItem">Software Developer</div>
                        <div className="textItem">kimseyerik@gmail.com</div>
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    } else {
        return (
            <AnimatePresence exitBeforeEnter>
                <motion.div className="footerContainerInactive"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsActive(true)}
                >

                    <FontAwesomeIcon icon={faGripHorizontal} size="3x" fill="#fff" />

                </motion.div>
            </AnimatePresence>)
    }
}
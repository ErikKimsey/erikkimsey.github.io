import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripHorizontal, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "../assets/resume/erik_kimsey_resume_software_dev_design.pdf";


export default function Footer() {

    const { scrollY } = useScroll()
    let [isScrolling, setIsScrolling] = useState(false);
    let [isActive, setIsActive] = useState(true);

    useEffect(() => {

        return scrollY.onChange((e) => {
            // TODO
        });
    }, [])

    useEffect(() => {
    }, [isScrolling])


    if (isActive) {
        return (
            <AnimatePresence mode='wait' >
                <motion.div className="footerContainer"
                    initial={{ x: 0, opacity: 0, scale: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{}}
                >
                    <motion.div className="linksContainer"
                        initial={{ x: 0, opacity: 0, scale: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            duration: 1,
                            delay: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <a target="_blank" href="https://github.com/erikkimsey">
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/erik-kimsey/">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </a>
                        <a target="_blank" href={resume}>
                            <FontAwesomeIcon icon={faUserAstronaut} size="3x" />
                        </a>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        )
    } else {
        return (
            <AnimatePresence mode='wait'>
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
import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripHorizontal, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import resume from "../assets/resume/erik_kimsey_software_engineer.pdf";


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
                <motion.nav className="footerContainer scale-75 "
                    aria-label="Résumé and social links"
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
                        <a target="_blank" rel="noopener noreferrer" href={resume} aria-label="Résumé (opens in a new tab)">
                            <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/erikkimsey" aria-label="GitHub profile (opens in a new tab)">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/erik-kimsey/" aria-label="LinkedIn profile (opens in a new tab)">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        {/* <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/etaether" aria-label="SoundCloud profile (opens in a new tab)">
                            <FontAwesomeIcon icon={faSoundcloud} size="2x" />
                        </a> */}
                    </motion.div>
                </motion.nav>
            </AnimatePresence>
        )
    } else {
        return (
            <AnimatePresence mode='wait'>
                <motion.button className="footerContainerInactive"
                    type="button"
                    aria-label="Show résumé and social links"
                    aria-expanded="false"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsActive(true)}
                >

                    <FontAwesomeIcon icon={faGripHorizontal} size="3x" fill="#fff" />

                </motion.button>
            </AnimatePresence>)
    }
}
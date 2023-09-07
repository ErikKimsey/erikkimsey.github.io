import React, { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import "./bannerOffsiteLinks.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripHorizontal, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "../assets/resume/erikkimsey_frontendEngineer_resume.pdf";


let peach = "#ffcea7";

export default function OffsiteLinks() {

  const { scrollY } = useScroll()
  let [isScrolling, setIsScrolling] = useState(false);
  let [isActive, setIsActive] = useState(true);

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
        <motion.div className="offsiteLinksContainer"
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
              {/* <FontAwesomeIcon icon={faGithub} size="2x" /> */}
              github.
            </a>
            {/* <a target="_blank" href="https://soundcloud.com/oddtreatment">
              <FontAwesomeIcon icon={faSoundcloud} size="3x" />
            </a> */}
            <a target="_blank" href="https://www.linkedin.com/in/erik-kimsey-softbodysocial/">
              linkedin.
              {/* <FontAwesomeIcon icon={faLinkedin} size="2x" /> */}
            </a>
            <a target="_blank" href={resume}>
              resume.
              {/* <FontAwesomeIcon icon={faUserAstronaut} size="2x" /> */}
            </a>
            {/* <div className="resumeText">Resume</div> */}
          </motion.div>
          {/* <div className="textItemContainer">
                        <div className="textItem">Erik Kimsey</div>
                        <div className="textItem">Software Developer</div>
                        <div className="textItem">kimseyerik@gmail.com</div>
                    </div> */}
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

          <FontAwesomeIcon icon={faGripHorizontal} size="2x" fill="#fff" />

        </motion.div>
      </AnimatePresence>)
  }
}
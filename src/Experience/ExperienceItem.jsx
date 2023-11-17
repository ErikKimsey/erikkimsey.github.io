import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faSoundcloud, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/experienceItem.scss"

import ExperienceModal from "./ExperienceModal";


export default function ExperienceItem(props) {
  let { name, stack, dates, role, index, github, soundcloud, url, about } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);


  if (!modalOpen) {
    return (
      <motion.div
        whileHover={{ scale: 1.01, top: "20px" }}
        whileTap={{ scale: 0.95 }}
        className="experienceItemContainer"
        onClick={() => (modalOpen ? close() : open())}
      // style={{ zIndex: index + 4, top: `${(index * 40) + 100}px`, marginLeft: `${(index * 10) - 80}px` }}
      >
        <div className="expItemName">{name}</div>
        <div className="expItemRole">{role}</div>
        <div className="expItemStack">{stack}</div>
        {/* <div className="expItemLabel">{name}</div>
                <p className="expItemDate">{dates}</p> */}
      </motion.div >
    )
  }
  if (modalOpen) {
    return (
      <ModalContainer>
        {modalOpen && (
          <ExperienceModal modalOpen={modalOpen} handleClose={close}
            name={name} stack={stack} about={about} dates={dates} role={role} url={url} github={github} key={stack}
          />
        )}
      </ModalContainer>
    )
  }
}

function ModalContainer({ children, label }) {
  // Enables the animation of components that have been removed from the tree
  return (<AnimatePresence
    mode='wait'
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a tim
    // The exiting component will finish its exit
    // animation before entering component is rendered

    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => console.log("Exit complete")}
  >
    {children}
  </AnimatePresence >)
}
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faSoundcloud, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink, faAngleRight, faExpand, faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles/experienceItem.scss"

import ExperienceModal from "./ExperienceModal";
import { log } from "three/examples/jsm/nodes/Nodes.js";


export default function ExperienceItem(props) {
    let { name, stack, dates, role, index, github, soundcloud, url, about } = props;

    const [modalOpen, setModalOpen] = useState(false);
    const [techStackItems, setTechStackItems] = useState([]);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    useEffect(() => {
        let splitItems = stack.split(",");
        console.log(splitItems);
        setTechStackItems(splitItems);
    }, []);


    if (!modalOpen) {
        return (
            <motion.div
                whileHover={{ scale: 1.05, top: "20px" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", duration: 1 }}
                className="experienceItemContainer w-fit  xs:w-full"
                onClick={() => (modalOpen ? close() : open())}
            >
                <div className="name-role-icon-container">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faEye} size='1x' color="rgba(255,255,255, 0.3)" />
                    </div>
                    <div className="name-role-container">
                        <div className="expItemName">{name}</div>
                        <div className="expItemRole">{role}</div>
                    </div>
                </div>
                <div className="tech-stack-icon-container">
                    {
                        techStackItems &&
                        techStackItems.map((e) => {
                            return <div className="expItemStack">{e}
                            </div>
                        })
                    }

                </div>
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
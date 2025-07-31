import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles/experienceItem.scss"



import ExperienceModal from "./ExperienceModal";

export default function ExperienceItem(props) {
    let { name, stack, dates, role, index, github, soundcloud, url, about } = props;

    const [modalOpen, setModalOpen] = useState(false);
    const [techStackItems, setTechStackItems] = useState([]);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    useEffect(() => {
        let splitItems = stack.split(",");
        setTechStackItems(splitItems);
    }, []);


    if (!modalOpen) {
        return (
            <motion.div
                whileHover={{ scale: 1.02, top: "20px" }}
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
                            return <div className="expItemStack" key={e}>{e}
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
                    <ExperienceModal key={name} modalOpen={modalOpen} handleClose={close}
                        name={name} stack={stack} about={about} dates={dates} role={role} url={url} github={github}
                    />
                )}
            </ModalContainer>
        )
    }
}

function ModalContainer({ children, label }) {
    return (<AnimatePresence
        mode='wait'

        initial={false}

        onExitComplete={() => console.log("Exit complete")}
    >
        {children}
    </AnimatePresence >)
}
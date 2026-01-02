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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", duration: 1 }}
                className="experienceItemContainer w-full relative flex flex-col flex-wrap justify-start content-start p-2 m-2 w-full min-w-70 border-2 rounded-md border-grayzDark bg-blaq bg-opacity-20 backdrop-blur-xl overflow-hidden"
                onClick={() => (modalOpen ? close() : open())}
            >
                <div className="name-role-icon-container backdrop-blur-xl ">
                    <div className="text-md flex flex-col flex-wrap content-between p-2">
                        <div className="text-tealz pb-1 text-md font-comfortBold">{role}</div>
                        <div className="text-pinkz py-2 text-sm font-comfortBold">{name}</div>
                    </div>
                    <div className="icon-container text-sm">
                        <FontAwesomeIcon icon={faEye} color="rgba(255,255,255, 0.3)" />
                    </div>
                </div>
                <div className="tech-stack-icon-container flex flex-row flex-wrap ">
                    {
                        techStackItems &&
                        techStackItems.map((e) => {
                            return <div className="text-offWhitez py-1 px-5 m-2 text-sm text-center  font-medium  rounded-xl border-grayzDark border-2" key={e}>
                                {e}
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
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "../Experience/Experience";
import Skillset from "../Skillset/Skillset";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faRoad, faXmark, faToolbox, faTimeline } from '@fortawesome/free-solid-svg-icons'

import "./skillsExperienceParent.scss";

export default function SkillsExperienceParent() {
    const [openModal, setOpenModal] = useState('experience'); // 'skillset' | 'experience' | null

    const openSkillset = () => setOpenModal('skillset');
    const openExperience = () => setOpenModal('experience');
    const closeModal = () => setOpenModal(null);

    return (
        <motion.div
            className="w-auto flex flex-row items-start justify-start text-2xl pt-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                delay: 1.4,
            }}>
            {/* Triggers */}
            <button
                onClick={openSkillset}
                className="rounded font-quantify border-gray-600 bg-transparent text-grayz hover:text-peach hover:scale-110 text-transition duration-200 pl-2"
            >
                <FontAwesomeIcon icon={faTimeline} className="h-8" />

            </button>

            <div className="space w-10 h-1"></div>

            <button
                onClick={openExperience}
                className="rounded font-quantify border-gray-600 bg-transparent text-grayz hover:text-peach hover:scale-110 text-purps transition duration-200"
            >
                <FontAwesomeIcon icon={faRoad} className="h-8" />
            </button>

            {/* Modal Overlay with framer-motion */}
            <AnimatePresence>
                {openModal && (
                    <motion.div
                        className="fixed flex flex-row flex-wrap justify-center items-center z-[10] top-0 left-0 right-0 bottom-0 h-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={closeModal}
                            aria-hidden="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Panel */}
                        <motion.div
                            className="relative z-50 max-h-[85vh] w-full lg:w-1/2 rounded-lg shadow-2xl bg-black bg-opacity-50 "
                            role="dialog"
                            aria-modal="true"
                            initial={{ y: 24, scale: 0.1, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 24, scale: 0.1, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        >
                            <div className=" flex flex-col z-50 content-between justify-between px-3">
                                <button
                                    onClick={closeModal}
                                    className="rounded bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white w-12 h-12"
                                    aria-label="Close"
                                >
                                    <FontAwesomeIcon icon={faXmark} className=" text-white w-8 h-8" />
                                </button>
                                <h2 className="font-extrabold pb-1 text-7xl lg:text-9xl font-quantify overflow-clip">
                                    {openModal === 'skillset' ? 'Skillset' : 'Experience'}
                                </h2>
                            </div>


                            <div className="p-1 flex justify-center content-center">
                                {openModal === 'skillset' ? (
                                    <Skillset />
                                ) : (
                                    <Experience />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
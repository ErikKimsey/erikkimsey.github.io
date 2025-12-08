import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "../Experience/Experience";
import Skillset from "../Skillset/Skillset";

import "./skillsExperienceParent.scss";

export default function SkillsExperienceParent() {
    const [openModal, setOpenModal] = useState(null); // 'skillset' | 'experience' | null

    const openSkillset = () => setOpenModal('skillset');
    const openExperience = () => setOpenModal('experience');
    const closeModal = () => setOpenModal(null);

    return (
        <div className="skills-experience-container  w-full flex flex-row justify-start content-start text-xl  items-start">
            {/* Triggers */}
            <button
                onClick={openSkillset}
                className="px-4  py-2 mx-2 ml-0 rounded border-gray-600 text-white hover:bg-gray-700 text-purps font-black transition duration-500"
            >
                Skillset
            </button>

            <div className="space  w-1 h-1 "></div>

            <button
                onClick={openExperience}
                className="px-4 py-2 mx-2  rounded  border-white text-white hover:bg-gray-700 text-purps font-bold transition duration-500"
            >
                Experience
            </button>

            {/* Modal Overlay with framer-motion */}
            <AnimatePresence>
                {openModal && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
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
                            className="relative z-50 max-h-[85vh] w-[90vw] max-w-5xl overflow-auto rounded-lg shadow-2xl bg-black bg-opacity-50  border border-white/10 overflow-x-clip"
                            role="dialog"
                            aria-modal="true"
                            initial={{ y: 24, scale: 0.98, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 24, scale: 0.98, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        >
                            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
                                <h2 className="text-lg font-semibold capitalize">
                                    {openModal === 'skillset' ? 'Skillset' : 'Experience'}
                                </h2>
                                <button
                                    onClick={closeModal}
                                    className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                    aria-label="Close"
                                >
                                    Close
                                </button>
                            </div>

                            <div className="p-4 flex justify-center content-center">
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
        </div>
    );
}
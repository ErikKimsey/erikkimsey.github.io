import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function FreelanceComponentAndModal() {

    let [freelance, setFreelance] = useState(false);

    function FreelanceTabClick() {
        setFreelance(!freelance);
    }

    function closeModal() {
        setFreelance(false);
    }

    return (
        <div>
            <div className="freelance-button-tab fixed flex flex-row justify-around items-center p-0 m-0 top-0 left-0 w-full h-24 " >
                <div className="w-3/5 sm:w-3/5 lg:w-1/3 h-full bg-lime-300 rounded-br-3xl rounded-bl-3xl" onClick={FreelanceTabClick
                }>

                </div>
            </div>
            <AnimatePresence>{
                freelance &&
                <motion.div
                    className="fixed flex flex-col justify-center items-center z-[10] top-0 left-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>


                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="relative z-50 h-full max-h-[85vh] w-[90vw] max-w-5xl overflow-auto rounded-lg shadow-2xl bg-black bg-opacity-50  border border-white/10 overflow-x-clip"
                        role="dialog"
                        aria-modal="true"
                        initial={{ y: 24, scale: 0.1, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 24, scale: 0.1, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                        {/* <div className=" w-1/2 h-1/2 bg-fuchsia-900"> */}
                        FreelanceComponentAndModal
                        {/* </div> */}
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default FreelanceComponentAndModal;
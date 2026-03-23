import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import EmailJS from "./EmailJS";

function EmailJSModal({ isOpen = false, onClose = () => { } }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed flex flex-row flex-wrap justify-center items-center z-[20] top-0 left-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="absolute inset-0 backdrop-blur-md"
                        onClick={onClose}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative flex flex-col z-50 h-full max-h-[85vh] w-[99vw] lg:w-[95vw] max-w-3xl overflow-auto rounded-lg shadow-2xl bg-black bg-opacity-30 inset-shadow-indigo-500 overflow-x-clip p-2 lg:p-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Contact form"
                        initial={{ y: 24, scale: 0.1, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 24, scale: 0.1, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                        <div className="flex flex-row items-end p-2 w-full">
                            <button
                                onClick={onClose}
                                className="p-2 rounded hover:bg-offWhitez text-offWhitez hover:text-blaq duration-300"
                                aria-label="Close"
                            >
                                <FontAwesomeIcon icon={faXmark} className="w-8 h-8 text-xl" />
                            </button>
                        </div>

                        <div className="w-full flex flex-col justify-center content-center pb-4">
                            <div className="w-full p-2 font-extrabold px-1 sm:px-2 pb-1 text-6xl lg:text-8xl self-center font-quantify overflow-clip">
                                contact
                            </div>
                            <div className="text-lg lg:text-xl px-4 font-black">
                                Tell me about your project and I will follow up soon.
                            </div>
                        </div>

                        <div className="w-full px-2 lg:px-4 pb-4">
                            <EmailJS modalStyle onSuccessAcknowledge={onClose} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default EmailJSModal;

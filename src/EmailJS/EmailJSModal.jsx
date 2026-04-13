import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import EmailJS from "./EmailJS";

function EmailJSModal({ isOpen = false, onClose = () => { } }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    // className="fixed flex flex-row flex-wrap justify-center items-center z-[20] top-0 left-0 w-full h-auto lg:h-[100vh] px-3 bg-blaq bg-opacity-95 lg:bg-opacity-55 backdrop-blur-0 lg:backdrop-blur-md"
                    className="fixed z-10 h-[100vh] w-full top-0 left-0 px-6 flex flex-row flex-wrap justify-center bg-blaq bg-opacity-95 lg:bg-opacity-55 backdrop-blur-0 lg:backdrop-blur-md "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="absolute inset-0 h-auto"
                        onClick={onClose}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative flex flex-col w-full lg:w-[70vw] h-auto z-50 h-auto overflow-y-scroll rounded-lg shadow-2xl bg-black inset-shadow-indigo-500 overflow-x-clip p-2 lg:p-8 px-2 lg:px-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Contact form"
                        initial={{ y: 24, scale: 0.1, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 24, scale: 0.1, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                        <div className="flex flex-row items-end px-10 p-2 pl-0 ml-0 w-full">
                            <button
                                onClick={onClose}
                                className="p-2 pl-0 rounded-sm text-yellowz hover:text-blaq duration-300"
                                aria-label="Close"
                            >
                                <FontAwesomeIcon icon={faXmark} className="w-10 h-10 text-2xl" />
                            </button>
                        </div>

                        <div className="w-full flex flex-col justify-center content-start  pb-4">
                            <div className="w-full font-extrabold text-6xl lg:text-6xl self-start font-quantify overflow-clip h-24 pt-11 bg-yellowz text-blaq">
                                contact
                            </div>
                            <div className="text-l pb-4 mt-4 font-black overflow-clip">
                                Share your deepest targeted (cognitive or non-cognitive) UI alignment needs.   I will respond promptly.
                            </div>
                        </div>

                        <div className="w-full pb-4 overflow-clip">
                            <EmailJS modalStyle onSuccessAcknowledge={onClose} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default EmailJSModal;

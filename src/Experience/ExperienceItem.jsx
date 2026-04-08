import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles/experienceItem.scss"
import ExperienceModal from "./ExperienceModal";



export default function ExperienceItem(props) {
    let { name, stack, dates, role, index, github, soundcloud, url, imgs, about, video } = props;

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
                whileHover={{ scale: 0.98, backgroundColor: "rgba(111,55,111, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", duration: 1 }}
                className="experienceItemContainer relative flex flex-col flex-wrap justify-start content-start py-1 m-0 w-full min-w-70 border border-grayzDark rounded-sm bg-opacity-0 backdrop-blur-sm overflow-hidden my-2"
                onClick={() => (modalOpen ? close() : open())}
            >

                <div className={`flex flex-col w-full ${index % 2 === 0 ? 'bg-blaq' : 'bg-grayzDark'} bg-opacity-5 backdrop-blur-sm overflow-visible mix-blend-screen`}>
                    <div className="label-and-price flex flex-col justify-start px-8 pt-8  text-xl">
                        <div className="text-white font-quantify font-black overflow-hidden z-20 text-pinkz">{role}</div>
                        <div className=" text-tealz font-quantify font-black text-yellowz overflow-hidden m-0 pb-2 bg-transparent">{name}</div>
                    </div>
                    <div className="border-b-2 border-grayzDark mb-4 mx-8"></div>
                    {/* <div className="service-description font-black px-8 pb-4">
                        <div className="text-pinkz text-sm font-comfortBold">{name}</div>
                        {about ? <div className="text-offWhitez text-sm pt-2 h-44">{about}</div> : null}
                    </div> */}
                    {/* <div className="tech-stack-icon-container flex flex-row flex-wrap px-6 pb-2 gap-1">
                        {techStackItems && techStackItems.map((e) => (
                            <div className="text-white py-0 px-1 m-1  border-1-grayzDark text-sm text-center font-medium rounded-md " key={e}>
                                {e}
                            </div>
                        ))}
                    </div> */}
                </div>
                <div className="absolute w-full flex flex-col items-end justify-start lg:pr-36 -top-32 overflow-clip pointer-events-none">
                    <FontAwesomeIcon icon={faEye} className="text-[400px] " color="rgba(111,111, 111,0.3)" />
                </div>
            </motion.div >
        )
    }
    if (modalOpen) {
        return (
            <ModalContainer>
                {modalOpen && (
                    <ExperienceModal key={name} modalOpen={modalOpen} handleClose={close} imgs={imgs} video={video}
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
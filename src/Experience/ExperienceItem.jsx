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
        console.log(about);


    }, []);



    if (!modalOpen) {
        return (
            <motion.div
                whileHover={{ scale: 0.99 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", duration: 1 }}
                className=" relative flex flex-col flex-wrap justify-start content-start py-1 m-0 w-full min-w-70 border border-grayzDark rounded-sm overflow-hidden my-2 pb-0 bg-none z-10"
                onClick={() => (modalOpen ? close() : open())}
            >

                <div className={`flex flex-col h-full w-11/12 lg:w-2/3  backdrop-blur-[1px] lg:backdrop-blur-sm overflow-visible pt-0 p-0 py-1 bg-blaq bg-opacity-90 lg:bg-opacity-60`}>
                    <div className="flex flex-col justify-start px-8 pt-4 pb-2 text-xl ">
                        <div className="pt-0 text-white font-quantify overflow-hidden text-white">{role}</div>
                        <div className=" text-tealz font-quantify font-black overflow-hidden m-0 ">{name}</div>
                        <div className="text-offWhitez text-sm font-comfortBold">{name}</div>
                    </div>
                    {/* <div className="border-b-2 border-grayzDark mb-4 mx-8"></div> */}
                    {/* <div className="service-description font-black px-8 pb-4"> */}
                    {/* {about &&
                            about.map((e) => {
                                return <div className="text-offWhitez text-sm pt-2 ">{e}</div>
                            })
                        } */}
                    {/* </div> */}
                    {/* <div className="tech-stack-icon-container flex flex-row flex-wrap px-6 pb-2 gap-1">
                        {techStackItems && techStackItems.map((e) => (
                            <div className="text-white py-0 px-1 m-1  border-1-grayzDark text-sm text-center font-medium rounded-md " key={e}>
                                {e}
                            </div>
                        ))}
                    </div> */}
                </div>
                {/* <div className="absolute w-full flex flex-col items-end justify-start lg:pr-36 -top-32 overflow-clip pointer-events-none"> */}
                <div className={`absolute w-full lg:w-1/2 -right-12 -top-10 -z-10 -rotate-6 rounded-md`}>
                    {
                        <img src={imgs[0]} />
                    }
                    {/* <FontAwesomeIcon icon={faEye} className="text-[400px] " color="rgba(111,111, 111,0.3)" /> */}
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
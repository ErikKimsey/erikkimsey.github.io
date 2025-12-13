import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const DEALS_PACKAGES = [
    {
        label: "UI Fixes and Adjustments",
        price: "$150",
        description: "letcher cybernetic mimetic quicksilver dub quartz-halogen origami grid temperfoam polysaccharide mycotoxin program code infrastructure cop. "
    },
    {
        label: "UI / UX Design",
        price: "$150",
        description: "	Multinational chip prototype polysaccharide neural SAS origami clinic cryptic black zaibatsu cutting-edge cop Yakuza. "
    },
    {
        label: "Prototyping : Mobile Game (single scene)",
        price: "$300",
        description: "Helsinki Sprawl factory blue trace quicksilver ICE shattered military. Ninja socket temperfoam samurai ICE implant laser-scrawled software trace cabal Chinese chrome. "
    },
    {
        label: "Prototyping : Web App (single screen)",
        price: "$300",
        description: "Helsinki Sprawl factory blue trace quicksilver ICE shattered military. Ninja socket temperfoam samurai ICE implant laser-scrawled software trace cabal Chinese chrome. "
    }
]

function DealPackage({ index, pack }) {

    const { label, price, description } = pack;

    return (
        index % 2 !== 0 ?
            (<div className="relative flex flex-wrap justify-between black p-2 m-4 h-72
             border-2 rounded-md  border-stone-400">
                <div className="flex flex-col w-full sm:w-full  md:w-1/2  lg:w-1/2 ">
                    <h1 className=" text-peach text-2xl font-quantify font-bold">{label}</h1>
                    <div className="text-black">{description}</div>
                </div>
                <div className="flex flex-col w-full sm:w-full md:w-1/2 lg:w-1/2   p-0 m-0 ">
                    <div className="text-black font-bold absolute bottom-2 right-2">{price}</div>
                </div>
            </div>)
            :
            (<div className="relative flex flex-wrap justify-between bg-white p-4 m-4  h-72 border-2 rounded-md border-purpz">

                <div className="flex flex-col w-full sm:w-full  md:w-1/2 lg:w-1/2  ">
                    <div className="text-blaq font-bold text-right absolute bottom-2 right-2">{price}</div>
                </div>
                <div className="flex flex-col w-full sm:w-full  md:w-1/2  lg:w-1/2 p-2">
                    <h1 className="  text-bluez text-2xl font-quantify font-bold ">{label}</h1>
                    <div className=" text-blaq font-bold ">{description}</div>
                </div>
            </div>)
    )
}


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
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        onClick={closeModal}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="relative flex flex-row flex-wrap z-50 h-full max-h-[85vh] w-[90vw] max-w-5xl overflow-auto rounded-lg shadow-2xl bg-black bg-opacity-10  border border-white/10 scroll overflow-x-clip p-10"
                        role="dialog"
                        aria-modal="true"
                        initial={{ y: 24, scale: 0.1, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 24, scale: 0.1, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                        {/* <div className=" w-1/2 h-1/2 bg-fuchsia-900"> */}
                        <div className="px-10 text-3xl text-center">Cigarette cybernetics deficiency virus gunship segment deficiency prototype. </div>
                        {/* </div> */}
                        <div className="relative w-full flex flex-col flex-wrap justify-center ">
                            {
                                DEALS_PACKAGES.map((e, i) => {
                                    return <DealPackage index={i} pack={e} />
                                })
                            }
                        </div>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default FreelanceComponentAndModal;
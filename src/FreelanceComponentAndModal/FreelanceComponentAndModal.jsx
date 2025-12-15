import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const DEALS_PACKAGES = [
    {
        label: "UI Features & Fixes",
        price: "$200",
        description: "",
        type: "dev"
    },
    {
        label: "UI / UX Design Consultation",
        price: "$150",
        description: "Multinational chip prototype polysaccharide neural SAS origami clinic cryptic black zaibatsu cutting-edge cop Yakuza. ",
        type: "design"
    },
    {
        label: "Brand Creative Brief",
        price: "$250",
        description: "Multinational chip prototype polysaccharide neural SAS origami clinic cryptic black zaibatsu cutting-edge cop Yakuza. ",
        type: "design"
    },
    {
        label: "Prototyping : Mobile Game",
        price: "$350",
        description: "Helsinki Sprawl factory blue trace quicksilver ICE shattered military. Ninja socket temperfoam samurai ICE implant laser-scrawled software trace cabal Chinese chrome. ",
        type: "dev"

    },
    {
        label: "Prototyping : Web App",
        price: "$300",
        description: "Helsinki Sprawl factory blue trace quicksilver ICE shattered military. Ninja socket temperfoam samurai ICE implant laser-scrawled software trace cabal Chinese chrome. ",
        type: "dev"

    },
    {
        label: "3D Modeling",
        price: "$200",
        description: "Helsinki Sprawl factory blue trace quicksilver ICE shattered military. Ninja socket temperfoam samurai ICE implant laser-scrawled software trace cabal Chinese chrome. ",
        type: "3D"

    },
    {
        label: "Sound FX Design",
        price: "$150",
        description: "Helsinki Sprawl factory blue trace quicksilver ICE shattered military. Ninja socket temperfoam samurai ICE implant laser-scrawled software trace cabal Chinese chrome. ",
        type: "audio"
    }
]

function DealPackage({ index, pack }) {

    const { label, price, description } = pack;

    return (
        // index % 2 !== 0 ?
        (<div className="relative flex flex-wrap justify-between black p-2 m-4 h-72 sm:w-96 md:w-96 lg:w-96 min-w-70
             border-2 rounded-md  border-stone-400">
            <div className="flex flex-col">
                <h1 className=" text-peach text-2xl font-quantify font-bold">{label}</h1>
                <div className="text-black">{description}</div>
            </div>
            <div className="flex flex-col w-full sm:w-full md:w-1/2 lg:w-1/2 p-0 m-0 ">
                <div className="text-black font-bold absolute bottom-2 right-4 font-quantify">{price}</div>
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
                    className="fixed flex flex-row flex-wrap justify-center items-center z-[10] top-0 left-0 w-full h-full "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>


                    <motion.div
                        className="absolute inset-0 bg-white/20 backdrop-blur-md "
                        onClick={closeModal}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="relative flex flex-row flex-wrap z-50 h-full max-h-[85vh] w-[95vw] max-w-5xl overflow-auto rounded-lg shadow-2xl bg-black bg-opacity-70 inset-shadow-indigo-500 scroll overflow-x-clip p-2 lg:p-10"
                        role="dialog"
                        aria-modal="true"
                        initial={{ y: 24, scale: 0.1, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 24, scale: 0.1, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                        {/* <div className=" w-1/2 h-1/2 bg-fuchsia-900"> */}
                        <div className="px-10 sm:px-2 text-xl lg:text-3xl text-center">Cigarette cybernetics deficiency virus gunship segment deficiency prototype. </div>
                        <div className="w-full px-10 sm:px-2 text-xl lg:text-2xl text-center self-center">Free initial consultation.</div>
                        {/* </div> */}
                        <div className="relative w-full flex flex-row flex-wrap justify-center ">
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
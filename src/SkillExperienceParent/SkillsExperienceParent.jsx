import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./skillsExperienceParent.scss";

export default function SkillsExperienceParent({ onOpenFreelance }) {
    const navigate = useNavigate();

    const openSkillset = () => navigate('/skillset');
    const openExperience = () => navigate('/experience');

    return (
        <motion.div
            className="box-content contain-content w-auto h-32 flex flex-row flex-wrap items-start justify-start text-2xl mt-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                delay: 1.4,
            }}>
            {/* Triggers */}
            {/* <button
                onClick={openSkillset}
                className="rounded font-quantify border-gray-600 bg-transparent text-grayz hover:text-peach hover:scale-110 text-transition duration-200 pl-2"
            >
                <FontAwesomeIcon icon={faTimeline} className="h-8" />

            </button> */}


            <button
                onClick={openExperience}
                className="rounded font-quantify border-gray-600 bg-transparent hover:scale-105 transition duration-300 flex flex-row items-start justify-center pl-2"
            >

                {/* <FontAwesomeIcon icon={faRoad} className="h-8" /> */}
                {/* <div className="text-purps text-3xl"> </div> */}
                <div className=" text-peach hover:text-tealz text-5xl text-center overflow-clip pr-2">XP.</div>
            </button>

            <div className="h-12 text-grayzDark text-8xl text-center overflow-clip pr-2">  / </div>

            <motion.button
                onClick={onOpenFreelance}
                initial={{ scale: 1, color: "#fcf", rotate: "0deg" }}
                whileHover={{ scale: 1.02, color: "#faf", rotate: "0deg" }}
                transition={{ duration: 0 }}
                className="rounded bg-transparent transition duration-300 textGlow pl-0"
                style={{ textShadow: "-2px -2px 10px #e0c, 3px 3px 10px #a0e", lineHeight: 1.1 }}
            >
                <div className="w-full h-12 font-quantify text-grayz text-5xl text-left pl-6overflow-clip pl-2">     FLAT-FEE CONTRACTS</div>
            </motion.button>

            {/* Modal removed; navigation now handled via routes */}
        </motion.div>
    );
}
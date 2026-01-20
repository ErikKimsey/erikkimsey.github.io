import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./skillsExperienceParent.scss";

export default function SkillsExperienceParent() {
    const navigate = useNavigate();

    const openSkillset = () => navigate('/skillset');
    const openExperience = () => navigate('/experience');

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
            {/* <button
                onClick={openSkillset}
                className="rounded font-quantify border-gray-600 bg-transparent text-grayz hover:text-peach hover:scale-110 text-transition duration-200 pl-2"
            >
                <FontAwesomeIcon icon={faTimeline} className="h-8" />

            </button> */}


            <button
                onClick={openExperience}
                className="rounded font-quantify border-gray-600 bg-transparent text-grayz hover:text-peach hover:scale-110 text-purps transition duration-300 flex flex-row items-start justify-center"
            >

                {/* <FontAwesomeIcon icon={faRoad} className="h-8" /> */}
                {/* <div className="text-purps text-3xl"> </div> */}
                <div className="w-full text-purps text-5xl pl-4 text-center">CV</div>
            </button>

            {/* Modal removed; navigation now handled via routes */}
        </motion.div>
    );
}
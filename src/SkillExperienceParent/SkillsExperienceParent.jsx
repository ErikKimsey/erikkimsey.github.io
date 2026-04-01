import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./skillsExperienceParent.scss";

export default function SkillsExperienceParent({ onOpenFreelance, onOpenEmail = () => { } }) {
    const navigate = useNavigate();

    const openSkillset = () => navigate('/skillset');
    const openExperience = () => navigate('/experience');

    return (
        <motion.div
            className="box-content w-full h-auto flex flex-col items-start justify-start text-2xl mt-5 overflow-clip "
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


            <div className="flex flex-col items-start justify-between overflow-visible py-0">
                <button
                    onClick={openExperience}
                    className="box-content font-quantify border-gray-600 bg-transparent hover:scale-105 transition-all duration-500 flex content-start justify-start overflow-visible origin-left"
                >

                    <div className="text-start  hover:text-yellowz text-3xl overflow-visible">CV</div>
                </button>

                <button
                    onClick={onOpenEmail}
                    className="box-content font-quantify border-gray-600 bg-transparent hover:scale-105  transition-all duration-500 flex content-start justify-start overflow-visible origin-left"
                >
                    <div className="text-grayz hover:text-pinkz text-3xl overflow-visible">CONTACT</div>
                </button>
            </div>

            {/* <div className="w-full h-12 text-grayzDark text-8xl overflow-clip pr-2">  / </div> */}

            <motion.button
                onClick={onOpenFreelance}

                transition={{ duration: 2 }}
                className=" bottom-20 rounded bg-transparent transition duration-500 hover:scale-105 overflow-visible origin-left textGlow"
                style={{ lineHeight: 1.1 }}
            >
                <div className="h-12 font-quantify text-grayz text-3xl overflow-hidden">FLAT-FEE SERVICES</div>
            </motion.button>

            {/* Modal removed; navigation now handled via routes */}
        </motion.div>
    );
}
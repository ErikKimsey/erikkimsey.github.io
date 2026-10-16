import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./skillsExperienceParent.scss";

export default function SkillsExperienceParent({ onOpenFreelance, onOpenEmail = () => { }, onOpenExperience }) {
    const navigate = useNavigate();

    const openSkillset = () => navigate('/skillset');
    const openExperience = onOpenExperience || (() => navigate('/experience'));

    return (
        <motion.div
            className="box-content w-full h-auto flex flex-row items-start justify-start text-2xl mt-6 overflow-clip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                delay: 1,
            }}>
            {/* Triggers */}
            {/* <button
                onClick={openSkillset}
                className="rounded font-quantify border-gray-600 bg-transparent text-grayz hover:text-peach hover:scale-110 text-transition duration-200 pl-2"
            >
                <FontAwesomeIcon icon={faTimeline} className="h-8" />

            </button> */}


            {/* <div className="flex flex-row items-start justify-between overflow-visible py-0"> */}
            <button
                onClick={openExperience}
                type="button"
                aria-label="CV: view my experience"
                aria-haspopup="dialog"
                className="box-content font-quantify border-gray-600 bg-transparent hover:scale-95 transition-all duration-500 flex content-start justify-start overflow-visible origin-left pr-2"
            >

                <div className="text-start text-2xl overflow-visible mr-4">EXPERIENCE</div>
            </button>

            {/* Divider sits outside the buttons so it doesn't scale on hover. */}
            <div aria-hidden="true" className="self-stretch w-px bg-grayzDark" />

            <button
                onClick={onOpenEmail}
                type="button"
                aria-haspopup="dialog"
                className="box-content font-quantify border-gray-600 bg-transparent hover:scale-95 transition-all duration-500 flex content-start justify-start overflow-visible origin-left px-2 ml-4"
            >
                <div className="flex items-center gap-2 text-pinkz dark:text-yellowz text-2xl overflow-visible">
                    <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                    CONTACT ME !
                </div>
            </button>
            {/* </div> */}


            {/* <div className="w-full h-12 text-grayzDark text-8xl overflow-clip pr-2">  / </div> */}
            {/* Empty placeholder; kept out of the tab order and accessibility tree until it has content. */}
            <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                className="box-content font-quantify border-gray-600 bg-transparent hover:scale-110 transition-all duration-500 flex content-start justify-start overflow-visible origin-left pl-2"
            >
                {/* <div className="h-12 font-quantify hover:text-pinkz text-xl overflow-hidden">FLAT-FEE SERVICES</div> */}
            </button>

            {/* Modal removed; navigation now handled via routes */}
        </motion.div>
    );
}
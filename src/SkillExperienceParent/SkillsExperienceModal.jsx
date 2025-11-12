import { useEffect } from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "../Experience/ModalBackdrop";
import "../Experience/styles/experienceModal.scss";
import SkillsExperienceParent from "./SkillsExperienceParent";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};


export default function SkillsExperienceModal({ handleClose }) {
    useEffect(() => {
        // Match ExperienceModal behavior so footer doesn't overlay
        const foot = document.querySelector(".footerContainer");
        if (foot) foot.style.zIndex = -10;

        return () => {
            const foot = document.querySelector(".footerContainer");
            if (foot) foot.style.zIndex = 100;
        };
    }, []);

    return (
        <ModalBackdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="experienceModalContainer modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="headerContainer">
                    <div className="expItemRole">Skills & Experience</div>
                    <div className="expItemStack">Overview</div>
                    <div className="expItemLabel">Your capabilities and history</div>
                </div>

                <SkillsExperienceParent />

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                    <button onClick={handleClose}>Close</button>
                </div>
            </motion.div>
        </ModalBackdrop>
    );
}

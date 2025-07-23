import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import "./menu.scss";

// import RESUME from "./erikkimsey_frontendEngineer_resume.pdf";
import RESUME from "./erik_kimsey_resume_software_dev_design.pdf";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export default function Navigation({ isOpen, toggle }) {
    let [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    return (
        <motion.ul variants={variants} style={{ display: open === true ? "flex" : "none" }}>
            <MenuItem tag={"landing-container"} link="Home" setOpen={setOpen} toggle={toggle} />
            <MenuItem tag={"experience-container"} link="Experience" setOpen={setOpen} toggle={toggle} />
            <MenuItem tag={"playgroundContainer"} link="Playground" setOpen={setOpen} toggle={toggle} />
            <MenuItem tag={RESUME} link="Resume" setOpen={setOpen} toggle={toggle} />
        </motion.ul>
    )
}

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import "./menu.scss";


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export default function Navigation({ isOpen }) {
    let [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    return (
        <motion.ul variants={variants} style={{ display: open === true ? "flex" : "none" }}>
            <MenuItem tag={"landing-container"} link="Home" />
            <MenuItem tag={"experience-container"} link="Experience" />
        </motion.ul>
    )
}

const itemIds = [0, 1, 2, 3, 4];

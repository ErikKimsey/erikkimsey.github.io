import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSoundcloud, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/experienceItem.scss"


export default function ExperienceItem(props) {
    let { name, stack, dates, role, index } = props;

    return <motion.div

        // animate={{

        // }}
        // transition={{

        // }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="experienceItemContainer"
        style={{ zIndex: index + 4, top: `${(index * 40) + 100}px`, marginLeft: `${(index * 10) - 80}px` }}
    >
        <div className="expItemRole">{role}</div>
        <div className="expItemStack">{stack}</div>
        <div className="expItemLabel">{name}</div>

        <p className="expItemDate">{dates}</p>


    </motion.div >
}
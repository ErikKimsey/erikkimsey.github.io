import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import "./desktopNav.scss";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const init = {
    scale: 0,
    opacity: 0
}
const animation = {
    scale: 1,
    opacity: 1
}

const trans = {
    duration: 0.8,
    delay: 1,
    ease: [0, 0.71, 0.2, 1.01]
}


export default function DesktopNav(props) {
    const { } = props;


    function scrollToPage(id) {
        if (id === undefined) {

        }
        let y, x;
        let el = document.getElementById(id);
        console.log(el.offsetTop)
        if (el !== undefined) {
            y = el.offsetTop;
            x = el.offsetLeft;
            window.scrollTo({ left: x, top: y, behavior: "smooth" });
        }
    }

    return (

        <motion.div className='desktopNavContainer'>
            <motion.div
                initial={init}
                animate={animation}
                transition={{
                    duration: 0.8,
                    delay: 2.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className='navItem'
                onClick={() => scrollToPage("landing-container")}
            >Home</motion.div>

            <motion.div
                initial={init}
                animate={animation}
                transition={{
                    duration: 0.8,
                    delay: 2.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                onClick={() => scrollToPage("experience-container")}
                className='navItem'>Experience</motion.div>
            <motion.div
                initial={init}
                animate={animation}
                transition={{
                    duration: 0.8,
                    delay: 2.7,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                onClick={() => scrollToPage("playgroundContainer")}
                className='navItem'>Playground</motion.div>
        </motion.div>
    )
}

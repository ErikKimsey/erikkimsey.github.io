import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


export const MenuItem = ({ tag, link, toggle }) => {
    let [id, setId] = useState();

    useEffect(() => {
        setId(tag);
    }, [])

    function getResume() {

    }

    function scrollToPage() {
        if (id === undefined) {

        }
        let y, x;
        let el = document.getElementById(id);
        if (el !== undefined) {
            y = el.offsetTop;
            x = el.offsetLeft;
            window.scrollTo({ left: x, top: y, behavior: "smooth" });
        }
        toggle();
    }

    return (
        <>
            {
                link !== "Resume" ?
                    <motion.li
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToPage}
                    >
                        {link}
                    </motion.li>
                    :
                    <motion.li
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                        {id && <motion.a href={tag} target="_blank">
                            {link}
                        </motion.a>}
                    </motion.li>
            }
        </>
    );
};

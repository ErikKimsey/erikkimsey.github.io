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


export const MenuItem = ({ tag, link }) => {
    let [id, setId] = useState();

    useEffect(() => {
        setId(tag);
    }, [])

    function scrollToPage() {
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
        <>
            {id && <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPage}
            >
                {link}
                {/* {url && <a href={`#${url}`} className="text-placeholder">{link}</a>} */}
            </motion.li>}
        </>
    );
};

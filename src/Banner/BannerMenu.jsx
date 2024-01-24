import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./bannerMenu.scss";

// let itemLinks = [
//     { id: "experience-container", tag: "experience" },
//     { id: "education-container", tag: "education" }
// ]

const variants = {
    transition: {
        duration: 0.8,
        delay: 1.4,
        ease: [0, 0.71, 0.2, 1.01],
        y: { stiffness: 1000 }
    }
}



function BannerMenuItem(props) {
    let { tag, link, thisRef } = props;

    useEffect(() => {
        let sk;
        if (document.querySelector(`.${link}`) !== null) {
            sk = document.querySelector(`.${link}`);
        }
    }, [])

    function scrollToPage() {
        if (link === undefined) {
            return;
        }
        let y, x;
        let el = document.getElementById(link);
        if (el !== undefined) {
            y = el.offsetTop;
            x = el.offsetLeft;
            window.scrollTo({ left: x, top: y, behavior: "smooth" });
        }
    }

    return (
        <motion.div
            ref={thisRef}
            className="bannerMenuItem"
            variants={variants}
            whileHover={{ scale: 1.05, color: "rgba(0,255,96,0.49)", textShadow: "1px 2px 2px rgba(255, 0, 149, 0.6), -3px 0px 2px rgba(0, 122, 255, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPage}
        >
            {tag}
        </motion.div>

        /**
         * color: rgb(0 255 96 / 49%);
    text-shadow: rgb(255 0 149 / 50%) 0px 2px 3px, rgb(0 121 255 / 50%) 1px -1px 0px;
    transform: none;
         */

    )
}

export default function BannerMenu() {
    let itemLinks = [
        { id: "skillset-container", tag: "skill set", thisRef: useRef() },
        { id: "experience-container", tag: "experience", thisRef: useRef() },
    ];

    let [menuLinks, setMenuLinks] = useState();

    useEffect(() => {
        if (itemLinks && itemLinks.length > 0) {
            setMenuLinks(itemLinks);
        }
    }, [])

    return (
        <motion.div className="bannerMenu"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            {menuLinks &&
                menuLinks.map((e, i) => {
                    return (
                        <BannerMenuItem tag={e.tag} link={e.id} key={i} thisRef={e.thisRef} />
                    )
                })
            }
        </motion.div>
    )
}
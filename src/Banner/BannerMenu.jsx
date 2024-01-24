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
            whileHover={{ scale: 1.1, color: "rgba(0,0,0,0)", textShadow: "5px 2px 3px rgba(0, 255, 255, 0.6), -1px -5px 4px rgba(255, 0, 250, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPage}
        >
            {tag}
        </motion.div>

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
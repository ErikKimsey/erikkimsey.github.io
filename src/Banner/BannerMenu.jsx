import { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import "./bannerMenu.scss";
import { Context } from "../context/Context"

// let itemLinks = [
//     { id: "experience-container", tag: "experience" },
//     { id: "education-container", tag: "education" }
// ]

const variants = {
    transition: {
        duration: 1,
        delay: 1.4,
        ease: [0, 0.71, 0.2, 1.01],
        y: { stiffness: 1000 }
    }
}



function BannerMenuItem(props) {
    let { tag, link, thisRef } = props;

    let [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true)
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
            whileHover={{ scale: 1.05, color: "#ffceaf" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPage}
        >
            {tag}
        </motion.div>
    )
}

export default function BannerMenu() {

    let { headerAnimComplete, setHeaderAnimComplete } = useContext(Context);

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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                // delay: 1,
            }}
        // onAnimationComplete={() => setHeaderAnimComplete(true)}
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
import { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import ModalContext from "../context/Context"

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
    let { tag, link, thisRef, id } = props;

    const { openModal } = useContext(ModalContext);


    useEffect(() => {
        let sk;
        if (document.querySelector(`.${link}`) !== null) {
            sk = document.querySelector(`.${link}`);
        } else {
        }
    }, [])

    const handleClick = () => {
        openModal(id);
    }

    return (
        <motion.div
            ref={thisRef}
            className="bannerMenuItem"
            variants={variants}
            whileHover={{ scale: 1.01, color: "rgba(70,255,166,0.5)", textShadow: "1px 2px 3px rgba(255, 0, 149, 0.6), 2px 1px 3px rgba(0, 122, 255, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
        >
            {tag}
        </motion.div >
    )
}

export default function BannerMenu() {

    let itemLinks = [
        { id: "skillset-container", tag: "skill set / experience", thisRef: useRef() },
        { id: "work-gallery-container", tag: "UI / design work", thisRef: useRef() }
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
            }}
        >
            {menuLinks &&
                menuLinks.map((e, i) => {
                    return (
                        <BannerMenuItem tag={e.tag} link={e.id} key={i} thisRef={e.thisRef} id={i} />
                    )
                })
            }
        </motion.div>
    )
}
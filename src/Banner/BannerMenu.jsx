import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./bannerMenu.scss";

// let itemLinks = [
//     { id: "experience-container", tag: "experience" },
//     { id: "education-container", tag: "education" }
// ]

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


function BannerMenuItem(props) {
    let { tag, link } = props;

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
            className="bannerMenuItem"
            variants={variants}
            whileHover={{ scale: 1.1, color: "#FFFEC8" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPage}
        >
            {tag}
        </motion.div>

    )
}

export default function BannerMenu() {
    let itemLinks = [
        { id: "skillset-container", tag: "expertise" },
        { id: "experience-container", tag: "experience" },
    ];

    let [menuLinks, setMenuLinks] = useState();


    useEffect(() => {
        if (itemLinks && itemLinks.length > 0) {
            setMenuLinks(itemLinks);
        }
    }, [])


    return (
        <div className="bannerMenu">
            {menuLinks &&
                menuLinks.map((e, i) => {
                    return (
                        <>
                            <BannerMenuItem tag={e.tag} link={e.id} key={e.id} />
                        </>
                    )
                })
            }
        </div>
    )
}
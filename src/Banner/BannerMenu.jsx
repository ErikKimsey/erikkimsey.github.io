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
  let [menuItemPos, setMenuItemPos] = useState();
  let [targetDomPos, setTargetDomPos] = useState();


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

  function drawPointer(e) {

    let el = document.getElementById(link);
    let box = el.getBoundingClientRect();
    if (el !== null) {
      setTargetDomPos({ x: box.left, y: box.top });
    }

    setMenuItemPos({ x: e.clientX, y: e.clientY });
    let dot = document.createElement("div");
    dot.style.position = "fixed";
    dot.style.left = `${targetDomPos.x}px`;
    dot.style.top = `${targetDomPos.y}px`;
    dot.style.width = "100px";
    dot.style.height = "100px";
    dot.style.backgroundColor = "#f0f";
    dot.style.zIndex = 10001;
    document.body.appendChild(dot);

  }

  return (
    <motion.div
      onHoverStart={drawPointer}
      ref={thisRef}
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
    { id: "skillset-container", tag: "exper/tise", thisRef: useRef() },
    { id: "experience-container", tag: "exper/ience", thisRef: useRef() },
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
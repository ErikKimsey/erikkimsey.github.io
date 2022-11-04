import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
// import { EXPERIENCE_DATA } from "./experience_data";

import "./marquee.scss";

let mockData = [
    { title: "ZMFSBG." },
    { title: "asdfasdf." },
    { title: "ZMuryjyujkFSBG." },
    { title: "cxvcxbg." },
]


export default function Marquee(props) {
    let { customStyles, customDelay, customDur, data, directionLeft } = props;

    let marqueeControl = useAnimation();
    let [marqueeVariants, setMarqueeVariants] = useState({});
    let [dataset, setDataset] = useState([]);
    let [marqueePaused, setMarqueePaused] = useState(false);


    useEffect(() => {
        let left = window.innerWidth;
        let animate = {
            x: directionLeft === true ? [-left / 2, left] : [left, -left / 2],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: customDur,
                    ease: "linear",
                    delay: customDelay
                },
            },
        };

        setMarqueeVariants({ animate });

        setDataset(data);
    }, []);

    useEffect(() => {
        setDataset(data);
    }, [dataset]);

    function togglePause(pauseVal) {
        setMarqueePaused(pauseVal);
    }

    function staggerMarqueeElements(i) {
        return i + 1;
    }

    if (dataset.length > 0) {
        return (
            <div className="marqueeContainer"
                style={{ bottom: customStyles.bottom }}
            >
                {marqueeVariants && <motion.div
                    className="track"
                    variants={marqueeVariants}
                    animate="animate"
                    onHoverStart={() => { togglePause(true) }}
                    onHoverEnd={() => { togglePause(false) }}
                >
                    <div className="marqueeDataContainer">
                        {
                            dataset && dataset.map((e, i) => {
                                return <motion.h1
                                    transition={{
                                        duration: 1,
                                        delay: staggerMarqueeElements(i),
                                        ease: [0.1, 1, 0.75, .2]
                                    }}
                                    initial={{ opacity: 0.9, scale: 0.9 }}
                                    animate={{ opacity: 0.5, scale: 0.8 }}

                                    key={i}
                                >{e}</motion.h1>
                            })
                        }
                    </div>
                </motion.div>}
            </div>
        )
    } else {
        return (
            <div className="marqueeContainer"
                style={{ bottom: customStyles.bottom, background: "#fff", width: "100vw" }}
            >
                {marqueeVariants && <motion.div
                    className="track"
                    variants={marqueeVariants}
                    animate="animate"
                    onHoverStart={() => { togglePause(true) }}
                    onHoverEnd={() => { togglePause(false) }}
                >
                    <div className="marqueeDataContainer">
                        <motion.h1
                            transition={{
                                duration: 0.5,
                                delay: 0.4,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        ></motion.h1>
                    </div>
                </motion.div>}
            </div>)
    }
}
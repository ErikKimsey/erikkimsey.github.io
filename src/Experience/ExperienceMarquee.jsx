import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { EXPERIENCE_DATA } from "./experience_data";

import "./styles/experienceMarquee.scss";

let mockData = [
    { title: "ZMFSBG." },
    { title: "asdfasdf." },
    { title: "ZMuryjyujkFSBG." },
    { title: "cxvcxbg." },
]


export default function ExperienceMarquee(props) {
    let { customStyles, customDelay, customDur } = props;

    let marqueeControl = useAnimation();
    let [marqueeVariants, setMarqueeVariants] = useState({});
    let [mockD, setMockData] = useState();
    let [marqueePaused, setMarqueePaused] = useState(false);


    useEffect(() => {
        let left = window.innerWidth;
        let animate = {
            x: [left, -left / 2],
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
        setMockData(mockData);
    }, []);

    function togglePause(pauseVal) {
        setMarqueePaused(pauseVal);
    }

    function staggerMarqueeElements(i) {
        return i + 1;
    }

    return (
        <div className="marquee"
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
                        mockD && mockData.map((e, i) => {
                            return <motion.h1
                                transition={{
                                    duration: 0.5,
                                    delay: staggerMarqueeElements(i),
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 0.6, scale: 1 }}
                                key={i}
                            >{e.title}</motion.h1>
                        })
                    }
                </div>
            </motion.div>}
        </div>
    )
}
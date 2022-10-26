import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./experienceMarquee.scss";

let mockData = [
    { title: "ZMFSBG." },
    { title: "asdfasdf." },
    { title: "ZMuryjyujkFSBG." },
    { title: "cxvcxbg." },
]

export default function ExperienceMarquee() {

    let [marqueeVariants, setMarqueeVariants] = useState({});
    let [mockD, setMockData] = useState();


    useEffect(() => {
        let left = window.innerWidth;
        let animate = {
            x: [left / 2, -left / 2],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        };
        setMarqueeVariants({ animate });
        setMockData(mockData);
    }, []);

    return (
        <div className="marquee">
            {marqueeVariants && <motion.div
                className="track"
                variants={marqueeVariants}
                animate="animate"
            >
                <div className="marqueeDataContainer">
                    {
                        mockD && mockData.map((e) => {
                            return <h1>{e.title}</h1>
                        })
                    }
                </div>
            </motion.div>}
        </div>
    )
}
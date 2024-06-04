import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import "./styles/experience.scss";
import { EXPERIENCE_DATA } from "./experience_data";
import ExperienceItem from './ExperienceItem';

export default function Experience() {

    const containerRef = useRef();
    const [data, setData] = useState();
    let [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        if (EXPERIENCE_DATA && EXPERIENCE_DATA.length > 0) {

            setData(EXPERIENCE_DATA);
        }
    }, []);


    return (
        <motion.div className='experienceContainer'
            id="experience-container"
            ref={containerRef}
        >
            <div className='experience-background-image'></div>

            <div className="experienceItemsList">
                {
                    data && data.map((e, i) => {
                        return <ExperienceItem name={e.name} stack={e.stack} about={e.about} dates={e.dates} role={e.role} url={e.url} github={e.github} key={e.stack} index={i} />
                    })
                }
            </div>


        </motion.div>
    );
}

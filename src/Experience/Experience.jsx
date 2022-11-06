import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import Collapsible from 'react-collapsible';
import "./styles/experience.scss";
import { EXPERIENCE_DATA } from "./experience_data";
import ExperienceItem from './ExperienceItem';

export default function Experience() {

    const containerRef = useRef();
    const [data, setData] = useState();
    let [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        if (EXPERIENCE_DATA && EXPERIENCE_DATA.length > 0) {

            setData(EXPERIENCE_DATA.reverse());
        }
    }, []);

    /***
     * TODO:
     * -- Initialize Experience as collapsed,
     * -- text "Experience" is not initially displayed,
     * -- display graphic, if hovered-on, will display "Experience",
     * -- if graphic or text is clicked on, then Experience list will expand/be displayed.
     */

    return (
        <motion.div className='experienceContainer'
            id="experience-container"
        >
            {/*  */}
            {/*  */}
            {/* <div className='expItemListAndTargetContainer'> */}


            <div className="experienceItemsList" ref={containerRef}>
                <div className='experienceHeader'>
                    <h1 className='label'>experi.</h1>
                </div>
                {
                    data && data.map((e, i) => {
                        return <ExperienceItem name={e.name} stack={e.stack} about={e.about} dates={e.dates} role={e.role} url={e.url} github={e.github} key={e.stack} index={i} />
                    })
                }
            </div>

            {/* </div> */}

        </motion.div>
    );
}

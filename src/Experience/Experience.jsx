import { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import "./styles/experience.scss";
import { EXPERIENCE_DATA } from "./experience_data";
import ExperienceItem from './ExperienceItem';


export default function Experience() {

    const containerRef = useRef();
    const [data, setData] = useState();


    useEffect(() => {
        if (EXPERIENCE_DATA && EXPERIENCE_DATA.length > 0) {
            setData(EXPERIENCE_DATA);
        }
    }, []);


    return (
        <motion.div className='experienceContainer'
            id="experience-container "
            ref={containerRef}
        >
            <div className="experienceItemsList w-full">
                {
                    data && data.map((e, i) => {
                        return <div className="experience-item-container w-full" key={i} >
                            <ExperienceItem key={e.name} name={e.name} stack={e.stack} about={e.about} dates={e.dates} role={e.role} url={e.url} github={e.github} index={i} />
                        </div>
                    })
                }
            </div>
        </motion.div>
    );
}

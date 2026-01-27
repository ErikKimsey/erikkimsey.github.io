import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./styles/experience.scss";
import { EXPERIENCE_DATA } from "./experience_data";
import ExperienceItem from './ExperienceItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


export default function Experience() {

    const containerRef = useRef();
    const [data, setData] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        if (EXPERIENCE_DATA && EXPERIENCE_DATA.length > 0) {
            setData(EXPERIENCE_DATA);
        }
    }, []);


    return (
        <motion.div
            className='experienceContainer pl-2 lg:pl-20'
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
            <div className='w-full flex flex-col items-start justify-between flex-wrap pl-2 py-4'>
                <button
                    type="button"
                    className='pr-4 py-2 mb-12 rounded-md border border-blaq transition-colors'
                    onClick={() => navigate('/')}
                >
                    <FontAwesomeIcon icon={faAngleLeft} className="h-full text-xl text-offWhitez hover:text-purps" />
                </button>
                <div className='h-full flex justify-start size-9 text-6xl overflow-visible font-quantify'>Experience</div>
            </div>
            <div className="experienceItemsList w-full">
                {
                    data && data.map((e, i) => {
                        return <div className="experience-item-container w-full" key={i} >
                            <ExperienceItem key={e.name} name={e.name} stack={e.stack} about={e.about} dates={e.dates} role={e.role} url={e.url} github={e.github} index={i} imgs={e.imgs} />
                        </div>
                    })
                }
            </div>
        </motion.div>
    );
}

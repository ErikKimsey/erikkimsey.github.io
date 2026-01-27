import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./styles/experience.scss";
import { EXPERIENCE_DATA } from "./experience_data";
import ExperienceItem from './ExperienceItem';


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
            <div className='w-full flex items-center justify-between px-6  py-4 '>
                <div className='h-full flex justify-start size-9 text-6xl overflow-visible font-quantify'>Experience</div>
                <button
                    type="button"
                    className='px-4 py-2 rounded-md border border-slate-400 text-slate-100 hover:bg-slate-700 transition-colors'
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </button>
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

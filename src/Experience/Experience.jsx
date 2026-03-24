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
            <img src={"https://res.cloudinary.com/dfez8ez2g/image/upload/v1774021674/hemisphere_gradient_to_alpha_u34qdg.png"} className="fixed bg-cover left-0 bottom-0 lg:top-0 rotate-180 "></img>
            <div className='w-full flex flex-col content-between  flex-wrap py-4'>
                <button
                    type="button"
                    className='pr-4 py-2 mb-12 rounded-md border border-blaq transition-colors z-50'
                    onClick={() => navigate('/')}
                >
                    <FontAwesomeIcon icon={faAngleLeft} className="h-full text-xl text-offWhitez hover:text-purps" />
                </button>
                <div className='h-full flex  content-end size-9 text-6xl overflow-visible font-quantify text-yellowz z-20'>Experience</div>
            </div>
            <div className="experienceItemsList w-full">
                {
                    data && data.map((e, i) => {
                        return <div className="experience-item-container w-full" key={i} >
                            <ExperienceItem key={e.name} name={e.name} stack={e.stack} about={e.about} dates={e.dates} role={e.role} url={e.url} github={e.github} index={i} imgs={e.imgs} video={e.video} />
                        </div>
                    })
                }
            </div>
        </motion.div>
    );
}

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
            className='px-2 lg:pl-20 w-full flex flex-col justify-center items-center '
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
            <div className='w-full lg:w-9/12'>

                <img src={"https://res.cloudinary.com/dfez8ez2g/image/upload/v1774021674/hemisphere_gradient_to_alpha_u34qdg.png"} className="fixed bg-cover left-0 bottom-0 lg:top-0 rotate-180 "></img>

                <div className='flex flex-col content-between flex-wrap py-4 '>
                    <button
                        type="button"
                        className='pr-4 py-2 mb-12 rounded-md border border-blaq transition-colors z-50 self-start pl-2'
                        onClick={() => navigate('/')}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} className="h-full text-xl text-offWhitez hover:text-purps" />
                    </button>
                    <div className='h-16 pt-16 lg:h-20 lg:pt-20 lg:pb-2 w-full self-end size-9 text-6xl lg:text-8xl font-quantify text-blaq bg-yellowz overflow-clip z-10 box-content'>Experience</div>
                </div>

                <div className="experienceItemsList w-full flex flex-col">
                    {
                        data && data.map((e, i) => {
                            return <div className="w-full" key={i} >
                                <ExperienceItem key={e.name} name={e.name} stack={e.stack} about={e.about} dates={e.dates} role={e.role} url={e.url} github={e.github} index={i} imgs={e.imgs} video={e.video} />
                            </div>
                        })
                    }
                </div>
            </div>
        </motion.div>
    );
}

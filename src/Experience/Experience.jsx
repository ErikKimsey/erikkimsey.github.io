import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, animate, stagger } from "framer-motion";
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

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // 0.1s delay between each child
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <motion.div
            className='w-full flex flex-col justify-center items-center '
            ref={containerRef}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0, ease: 'easeInOut' }}
        >
            <img src={"https://res.cloudinary.com/dfez8ez2g/image/upload/q_auto/f_auto/v1775484678/droopy_e_fvyf3s.png"} className="fixed w-full aspect-square bg-contain lg:w-ful l bottom-20 lg:top-96 lg:top-9 -right-24 lg:-right-48 rotate-270 lg:rotate-0 -z-20 opacity-50 blur-md grayscale"></img>
            <div className='max-w-[1000px] w-full'>



                <div className='flex flex-col content-between flex-wrap py-4 '>
                    <button
                        aria-label="Navigate back to landing"
                        type="button"
                        className='pr-4 py-2 mb-12 rounded-md border border-blaq transition-colors z-50 self-start pl-2'
                        onClick={() => navigate('/')}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} className=" text-xl text-offWhitez hover:text-purps" />
                    </button>
                    <motion.h1
                        className='h-16 pt-16 lg:h-20 lg:pt-20 lg:pb-2 w-full self-end size-9 text-6xl lg:text-8xl font-quantify text-blaq bg-tealz overflow-clip z-10 box-content'
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -20 }}
                        variants={headerVariants}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        Experience

                    </motion.h1>
                </div>

                <motion.ul
                    className=" w-full flex flex-col"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {
                        data && data.map((e, i) => {
                            return <motion.li
                                variants={itemVariants}
                                className="w-full"
                                key={i}
                                transition={{ duration: (0.1 * i), ease: 'easeInOut' }}
                                exit={{ opacity: 0, y: 20 }}
                            >
                                <ExperienceItem key={e.name} name={e.name} stack={e.stack} about={e.about} dates={e.dates} role={e.role} url={e.url} github={e.github} index={i} imgs={e.imgs} video={e.video} />
                            </motion.li>
                        })
                    }
                </motion.ul>
            </div>
        </motion.div>
    );
}

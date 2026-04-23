import { motion, } from 'framer-motion';
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import './seeking-work.css'

const SeekingWork = () => {

    const hasAnimated = localStorage.getItem('bannerAnimated') === 'false';
    const [isVertical, setIsVertical] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVertical(prev => !prev);
        }, 5000);

        return () => clearInterval(interval);
    }, [])


    return <motion.div
        initial={hasAnimated ? { opacity: 1, lineHeight: 1 } : { opacity: 0, lineHeight: 1 }}
        animate={{ opacity: 1, lineHeight: 1 }}
        transition={{
            duration: 0.5,
            delay: 1.5,
        }}
        className='container fixed top-10 w-full px-10 flex flex-row items-center justify-center rounded-2xl'>
        <Marquee
            speed={40}
        >
            <motion.p
                className="w-full text-offWhitez overflow-clip text-center p-0 text-2xl font-quantify">
                I am currently available for full-time employment and contract work. &nbsp;&nbsp;
            </motion.p>
            <motion.p
                className="w-full text-grayz overflow-clip text-center p-0 text-2xl font-quantify">
                Let me bring superb useability, engagement, and vibrance to your project. &nbsp;&nbsp;
            </motion.p>
        </Marquee>
    </motion.div>
}

export default SeekingWork;
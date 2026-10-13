import { motion, } from 'framer-motion';
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import './seeking-work.css'

const SeekingWork = () => {

    const hasAnimated = localStorage.getItem('bannerAnimated') === 'false';


    return <motion.div
        initial={hasAnimated ? { opacity: 1, lineHeight: 1 } : { opacity: 0, lineHeight: 1 }}
        animate={{ opacity: 1, lineHeight: 1 }}
        transition={{
            duration: 0.5,
            delay: 1.5,
        }}
        className='container bottom-16 w-11/12 md:w-2/3 md:bottom-3 lg:top-10 lg:w-9/12 flex flex-row items-center justify-center rounded-sm p-0  '>

        <Marquee
            speed='0'
        >
            {/* <motion.p
                className="w-full text-grayz overflow-clip text-center p-0 text-2xl font-quantify">
                Let me bring superb usability, engagement, and vibrancy to your project. &nbsp;&nbsp;
            </motion.p> */}
            <motion.p
                className="w-full text-white overflow-clip text-center p-0 text-2xl font-comfortBold">
                I am currently available for work!  Contact me today! &nbsp;&nbsp;
            </motion.p>
        </Marquee>

    </motion.div>
}

export default SeekingWork;
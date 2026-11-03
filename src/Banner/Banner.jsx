import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BannerMenu from "./BannerMenu";
import "./banner.scss";

import { SELF_STATEMENT } from "../__data/data";
import LandingImageGallery from "../ImageGallery/LandingImageGallery";
import SeekingWork from "../SeekingWork/SeekingWork";



const ROLES = [
    'Creative Technologist',
    'Creative Engineer',
]

/** Shared by the visible role and the invisible ones that hold the box's height. */
const ROLE_CLASSES = "aboutSelfDeveloperContainer col-start-1 row-start-1 max-w-full overflow-visible py-[0.12em]";

/** Milliseconds each role shows before the next one, unless Banner is given timerTime. */
const ROLE_INTERVAL = 3000;

export default function Banner(props) {
    let { timerTime } = props;

    let bannerRef = useRef();
    let [iconActive, setIconActive] = useState(false);
    let [rolesIndex, setRolesIndex] = useState(0);
    let [isGrayscale, setIsGrayscale] = useState(true);

    const hasAnimated = localStorage.getItem('bannerAnimated') === 'false';

    useEffect(() => {
        let interval = null;
        setIconActive(props.isActive);
    }, [])

    useEffect(() => {
        // Remove grayscale after 3 seconds
        const timer = setTimeout(() => {
            setIsGrayscale(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    // Cycle through the roles, wrapping back to the first.
    useEffect(() => {
        const interval = setInterval(() => {
            setRolesIndex((i) => (i + 1) % ROLES.length);
        }, timerTime || ROLE_INTERVAL);
        return () => clearInterval(interval);
    }, [timerTime])

    return (
        <motion.div
            className="banner-container w-auto text-6xl md:text-3xl lg:text-8xl m-0 mt-[20vh] p-0 flex-col overflow-hidden z-10 "
            ref={bannerRef}
            initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                delay: 0,
            }}
            role="banner"
        >


            <div className="text-container flex flex-col flex-nowrap pl-0 overflow-clip overflow-clip ">
                <motion.h1
                    className="font-quantify overflow-clip text-6xl lg:text-7xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                    }}
                >
                    Erik Kimsey
                </motion.h1>

                {/* Sized to the screen so the longest role fits on a phone, and not
                    clipped, so the letters and the slide between roles show in full. */}
                <motion.div
                    className="grid justify-items-start font-quantify text-[clamp(2.25rem,9vw,3.75rem)] overflow-visible"
                    initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}

                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                    }}
                >
                    {/* Screen readers hear every role once instead of each change. */}
                    <span className="sr-only">{ROLES.join(", ")}</span>
                    {/* Every role sits invisibly in the same grid cell, so the box is
                        always as tall as the longest role and never changes height. */}
                    {ROLES.map((role) => (
                        <span
                            key={role}
                            className={`${ROLE_CLASSES} invisible`}
                            aria-hidden="true"
                        >
                            {role}
                        </span>
                    ))}
                    <AnimatePresence mode="wait" initial={false}>
                        {/* The gradient class sits on the fading element itself, since
                            gradient-clipped text can vanish inside a fading child.
                            overflow-visible overrides the site-wide overflow-x: hidden,
                            which would otherwise give the span its own scroll bar. The
                            gradient only paints inside the span's box, so the vertical
                            padding keeps tall letters and descenders from being cut off. */}
                        <motion.span
                            key={ROLES[rolesIndex]}
                            className={ROLE_CLASSES}
                            aria-hidden="true"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            {ROLES[rolesIndex]}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>
                <motion.div
                    className="aboutSelfDeveloperContainer font-quantify text-3xl overflow-clip"
                    initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}

                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                    }}

                >
                    {/* creative technologist / creative engineer */}
                </motion.div>

            </div>
            <div className="for-hiring-managers-and-clients pt-4 w-full md:w-2/3 lg:w-2/3 h-auto flex flex-col items-center justify-center overflow-hidden text-black font-quantify text-lg">
                {/* Software guy reacting to the world with code, design, and creativity. I build digital experiences that are functional, accessible, and visually appealing. */}

            </div>


            {/* <motion.div
                initial={hasAnimated ? { opacity: 1, lineHeight: 1 } : { opacity: 0, lineHeight: 1 }}
                animate={{ opacity: 1, lineHeight: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 1,
                }}
                className="aboutSelfDeveloperContainer overflow-clip pt-4 text-xl font-quantify">
                digital interface services,
            </motion.div> */}


            {/* <motion.p
                initial={hasAnimated ? { opacity: 1, lineHeight: 1 } : { opacity: 0, lineHeight: 1 }}
                animate={{ opacity: 1, lineHeight: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 1,
                }}
                className=" text-grayz overflow-clip pt-4 text-lg font-comfortBold">
                Frontend / UI development, with over 7 years of experience.
            </motion.p> */}



            {/* <motion.div
                initial={hasAnimated ? { opacity: 1, scale: 1, lineHeight: 1 } : { opacity: 0, scale: 0, lineHeight: 1 }}
                animate={{ opacity: 1, scale: 1, lineHeight: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1,
                }}
                className="aboutSelfDeveloperContainer overflow-clip text-2xl py-1 ">{"digital user-interface services"}</motion.div> */}



        </motion.div>
    );
}
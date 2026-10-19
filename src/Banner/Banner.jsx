import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import BannerMenu from "./BannerMenu";
import "./banner.scss";

import { SELF_STATEMENT } from "../__data/data";
import LandingImageGallery from "../ImageGallery/LandingImageGallery";
import SeekingWork from "../SeekingWork/SeekingWork";



const ROLES = [
    'UI Developer',
    'Software Developer',
    'Frontend Developer',
    'Creative Technologist',
    'Full-Stack Developer',
    'Software Engineer',
]

export default function Banner(props) {
    let { timerTime } = props;

    let bannerRef = useRef();
    let [iconActive, setIconActive] = useState(false);
    let [timer, setTimer] = useState(3000);
    let [rolesIndex, setRolesIndex] = useState(0);
    let [currRole, setCurrRole] = useState();
    let [isGrayscale, setIsGrayscale] = useState(true);

    const hasAnimated = localStorage.getItem('bannerAnimated') === 'false';

    useEffect(() => {
        let interval = null;
        setIconActive(props.isActive);
        setTimer(timerTime);
    }, [])

    useEffect(() => {
        // Remove grayscale after 3 seconds
        const timer = setTimeout(() => {
            setIsGrayscale(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        changeRole();
    }, [rolesIndex])


    function iterateRoles() {
        if (rolesIndex < ROLES.length) {
            setRolesIndex(rolesIndex++);
        } else {
            setRolesIndex(0);
        }
    }

    function changeRole() {
        setCurrRole(ROLES[rolesIndex]);
    }

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

                <motion.div
                    className="aboutSelfDeveloperContainer font-quantify text-6xl overflow-clip"
                    initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}

                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                    }}
                    data-text={currRole}
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {currRole}
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
                    websites / mobile apps / games
                </motion.div>

            </div>
            <div className="for-hiring-managers-and-clients pt-4 w-full md:w-2/3 lg:w-2/3 h-auto flex flex-col items-center justify-center overflow-hidden text-black font-quantify text-lg">
                Software guy reacting to the world with code, design, and creativity. I build digital experiences that are functional, accessible, and visually appealing.

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
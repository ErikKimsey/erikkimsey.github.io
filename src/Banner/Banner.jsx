import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import BannerMenu from "./BannerMenu";
import "./banner.scss";

import { SELF_STATEMENT } from "../__data/data";
import LandingImageGallery from "../ImageGallery/LandingImageGallery";


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
            className="banner-container w-auto text-6xl md:text-6xl lg:text-8xl m-0 p-0 flex-col overflow-hidden z-10 bg-blaq bg-opacity-60"
            ref={bannerRef}
            initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                delay: 0,
            }}
            role="banner"
        // style={{ filter: isGrayscale ? 'grayscale(100%)' : 'grayscale(0%)' }}
        >

            {/* <UnderConstruction /> */}
            <div className="text-container flex flex-col flex-nowrap pl-0 overflow-clip overflow-clip">
                <motion.h1
                    className="font-quantify overflow-clip text-6xl lg:text-9xl"
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
                    web / mobile / games
                </motion.div>

            </div>

            <div className="border-b-2 pt-4 border-grayzDark"></div>


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

            <motion.p
                initial={hasAnimated ? { opacity: 1, lineHeight: 1 } : { opacity: 0, lineHeight: 1 }}
                animate={{ opacity: 1, lineHeight: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 1,
                }}
                className=" text-grayz overflow-clip pt-4 text-lg font-comfortBold">
                Targeted cognitive & non-cognitive re-adjustment, via digital user-interfaces.
            </motion.p>
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
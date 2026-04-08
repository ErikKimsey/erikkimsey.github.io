import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import BannerMenu from "./BannerMenu";
import "./banner.scss";

import { SELF_STATEMENT } from "../__data/data";
import LandingImageGallery from "../ImageGallery/LandingImageGallery";


const ROLES = [
    'UI Engineer',
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

    const hasAnimated = localStorage.getItem('bannerAnimated') === 'true';

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
            className="banner-container w-full text-6xl md:text-6xl lg:text-8xl m-0 p-0 flex-col overflow-hidden z-10 bg-"
            ref={bannerRef}
            initial={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 0,
            }}
            onAnimationComplete={!hasAnimated ? () => localStorage.setItem('bannerAnimated', 'true') : undefined}
        // style={{ filter: isGrayscale ? 'grayscale(100%)' : 'grayscale(0%)' }}
        >

            {/* <UnderConstruction /> */}
            <div className="text-container flex flex-col flex-nowrap overflow-clip">
                <motion.div
                    className="banner-item"
                    initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                    }}
                >
                    Erik Kimsey
                </motion.div>

                <motion.div
                    className="role banner-item"
                    initial={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}

                    transition={{
                        duration: 1,
                        delay: 0.3,
                    }}
                    data-text={currRole}
                >
                    {currRole}
                </motion.div>

            </div>

            <motion.div
                initial={hasAnimated ? { opacity: 1, scale: 1, lineHeight: 1 } : { opacity: 0, scale: 0, lineHeight: 1 }}
                animate={{ opacity: 1, scale: 1, lineHeight: 1 }}
                transition={{
                    duration: 1,
                    delay: 1,
                }}
                className="aboutSelfDeveloperContainer overflow-clip">{SELF_STATEMENT}</motion.div>
            {/* <BannerMenu /> */}

            {/* <div className="absolute right-12 top-9 w-[800px] h-[640px] "> */}
            {/* </div> */}

        </motion.div>
    );
}
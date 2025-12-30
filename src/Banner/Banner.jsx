import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import BannerMenu from "./BannerMenu";
import "./banner.scss";

import { SELF_STATEMENT } from "../__data/data";


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

    useEffect(() => {
        let interval = null;
        setIconActive(props.isActive);
        setTimer(timerTime);
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
            className="banner-container w-full text-5xl sm:text-5xl md:text-6xl lg:text-8xl m-0 p-0 flex-col overflow-hidden"
            ref={bannerRef}
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 0,
            }}
        >
            {/* <UnderConstruction /> */}
            <div className="text-container flex flex-col flex-nowrap overflow-clip">
                <motion.div
                    className="banner-item"
                    initial={{ opacity: 0 }}
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
                    initial={{ opacity: 0, scale: 0 }}
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
                initial={{ opacity: 0, scale: 0, lineHeight: 1 }}
                animate={{ opacity: 1, scale: 1, lineHeight: 1 }}
                transition={{
                    duration: 1,
                    delay: 1,
                }}
                className="aboutSelfDeveloperContainer overflow-clip">{SELF_STATEMENT}</motion.div>
            {/* <BannerMenu /> */}
        </motion.div>
    );
}
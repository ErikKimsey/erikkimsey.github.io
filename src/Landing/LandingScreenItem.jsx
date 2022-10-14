import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./landingScreenItem.scss";

export default function LandingScreenItem(props) {
    let { label, navTo } = props;
    let [thisLabel, setThisLabel] = useState();
    let [thisNavTo, setThisNavTo] = useState();

    useEffect(() => {
        if (label) {
            setThisLabel(label);
            setThisNavTo(navTo);
        }
    }, []);
    return (
        <motion.div
            className='screenItemContainer'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            {thisLabel && navTo && <motion.div
                className='label'
            >
                <Link to={navTo}>
                    {thisLabel}
                </Link>
            </motion.div>}
        </motion.div>
    )
}
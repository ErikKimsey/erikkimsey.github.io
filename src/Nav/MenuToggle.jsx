import * as React from "react";
import { motion } from "framer-motion";

import "./menu.scss";

const Path = props => (
    <motion.path
        fill="#f0f"
        strokeWidth="3"
        stroke="#f0f"
        strokeLinecap="round"
        {...props}
    />
);

export default function MenuToggle({ toggle }) {

    return (
        <button onClick={toggle}>
            <svg width="25" height="25" viewBox="0 0 25 25">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 25 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 25 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 25 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>)
}

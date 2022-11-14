import React, { } from "react";
import { } from "framer-motion";

const styles = {
    container: {
        zIndex: "1111",
        position: "fixed",
        top: "100px",
        left: "100px",
        width: "50%",
        padding: "10px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        rotate: "-7deg"
    },
    labelStyles: {
        fontSize: "1.5rem",
        color: "yellow",
        fontWeight: "900",
    },
    msgStyles: {
        fontSize: "0.8rem",
        color: "yellow",

    }
}

export default function UnderConstruction() {
    return (
        <div className="underConstructionContainer" style={styles.container}>
            <div className="label" style={styles.labelStyles}> UNDER CONSTRUCTION</div>
            <div className="msg" style={styles.msgStyles}> This is V2 of my personal site.  So, some links may be broken, some content may be missing.   </div>
        </div>
    )
}
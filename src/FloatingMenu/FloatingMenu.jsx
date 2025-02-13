import React, { useEffect, useState } from "react";

import "./floatingMenu.scss";

export default function FloatingMenu() {

    let [mousePos, setMousePos] = useState({
        mX: 0,
        mY: 0
    });

    // let [] = useState(false);
    let [isActive, setIsActive] = useState(false);

    function updateMousePos(e) {
        let { clientX, clientY, screenX, screenY } = e;
        setMousePos({
            mX: clientX,
            mY: clientY
        });
        // mousePos

    }

    useEffect(() => {
        document.addEventListener("mousemove", updateMousePos);
        return () => document.removeEventListener("mousemove", updateMousePos);
    }, [])


    return (
        <div className="floatingMenuContainer" style={{ top: mousePos.mY - 50, left: mousePos.mX - 200 }}>
            <h1>OP!</h1>
            <h1>OP2</h1>
        </div>
    )
}
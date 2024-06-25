import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function QuickMarquee() {

    const [lines, setLines] = useState([])
    const [direction, setDirection] = useState("left");

    useEffect(() => {
        createLines();
        setDirection(evenOdd())
    }, [])

    function evenOdd() {
        return Math.random() < 0.5 ? "left" : "right";
    }

    function createLines() {
        for (let i = 0; i < 40; i++) {
            lines.push(<div style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "80px", width: "22px", margin: "4px", transform: "skew(-15deg)" }}>  </div>)
        }
    }

    return (
        <Marquee className="absolute" gradient="true" gradientColor="rgba(0,0,0,0.2)" direction={direction} speed={60} >
            {
                lines
            }
        </Marquee>)
}
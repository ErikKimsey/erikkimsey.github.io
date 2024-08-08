import React, { useEffect, useState } from "react";
import "./background.scss";

const BKGRD_TEXT = [
    'erik kimsey',
    'ui engineer',
    'experience',
    'expertise',
]



export default function Background() {

    const [displayed, setDisplayed] = useState("____");
    const [count, setCount] = useState(0);
    const [currI, setCurrI] = useState(0);

    const [hasLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        if (currI && BKGRD_TEXT) {
            const intervalId = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [])

    useEffect(() => {
        displayText();
    }, [count])

    function displayText() {
        let l = displayed.length;
        let t = new Array(l);
        t.fill("_");
        let joi = t.join('');
        setDisplayed(joi);
    }

    function delay(arr1, arr2, index) {
        setTimeout(() => {
            arr1[index] = arr2[index];
            let j = arr1.join('');
            setDisplayed(j);
        }, 1000);

    }


    return (
        <div className="background-container">
            {hasLoaded &&
                <div className="text-container">
                    {/* <video autoPlay muted id="bg-video">
                        <source src={require("../assets/videos/ek_blender.m4v")} />
                    </video> */}
                </div>}
        </div>
    )
}
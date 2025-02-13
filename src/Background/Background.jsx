import React, { useEffect, useState } from "react";
import "./background.scss";
import { faL } from "@fortawesome/free-solid-svg-icons";

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

    // ?
    const [subCount, setSubCount] = useState(0);
    const [hasLoaded, setLoaded] = useState(false);

    // ?
    const [currChars, setCurrChars] = useState([]);

    // ?
    const [splitChars, setSplitChars] = useState([]);

    useEffect(() => {
        setLoaded(true);
        // splitStrings(BKGRD_TEXT);
        if (currI && BKGRD_TEXT) {
            const intervalId = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
            // randomChopConcat(BKGRD_TEXT[currI]);
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

    function splitStrings(arr) {
        let nu = [];
        for (let index = 0; index < arr.length; index++) {
            const e = arr[index].split('');
            nu[index] = e;
        }
        setSplitChars(nu);
        randomChopConcat(nu);
    }


    // randomize array of chars
    function randomChopConcat(arr) {
        let temp = arr.slice();
        let nuArr = [];

        // 1. get length of array
        while (temp.length > 0) {
            // setInterval(
            //     () => {
            let ceil = Math.ceil(temp.length);
            let floor = Math.floor(0);

            // 2. use length as index in math.random ("randomIndex")
            let randIndex = Math.floor(Math.random() * (floor - ceil) + ceil);

            // 3. splicedChar = arr.splice(randomIndex, 1)
            let splicedChar = temp.splice(randIndex, 1);

            // 4. nuArr.push(splicedChar)
            nuArr.push(splicedChar);
            let disp = nuArr.concat('');
            setDisplayed(disp);
            // }, 1000
            // )

            // 5. <<<< repeat "1." - "4."
        }
    }

    function iterateCurrIndex() {
        if (currI < BKGRD_TEXT.length - 1) {
            setCurrI(currI + 1)
        } else {
            setCurrI(0);
        }
    }

    return (
        <div className="background-container">
            {hasLoaded &&
                <div className="text-container">

                    {/* {displayed} */}
                    {/* <video autoPlay muted id="bg-video">
                        <source src={require("../assets/videos/ek_blender.m4v")} />
                    </video> */}
                </div>}
        </div>
    )
}

/**
 * 
 * @returns re-shuffled characters of iterated BKGRD_TEXT
 */
function TheDisplayingText() {
    return (
        <div className="displaying-text-container"></div>
    )
}
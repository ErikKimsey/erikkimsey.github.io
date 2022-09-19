import React, { useEffect, useLayoutEffect, useState } from "react";
import Sketch from "react-p5";
import deviceType from "../utils/mobileDetection";
import P5Cursor from "./P5Cursor";
import LandingText from "./LandingText";


let x = 50;
let y = 50;

let textColors = {
    white: "#ffffff",
    pink: "#f0f",
    tankMidBlue: "#04157E",
    tankDarkBlue: "#140034"
}

let nameDimens = {
    left: 200,
    top: 200,
    width: 1000,
    height: 200
}

let titleDimens = {
    left: 200,
    top: 450,
    width: 1000,
    height: 200
}

export default function P5Sketch({ props }) {


    const [dimen, setDimens] = useState();
    const [devType, setDevType] = useState();

    let orbCursor, landingName, landingTitle, font, fontSize;
    let img;
    let input;
    let plantXPos, plantYPos, plantH, plantW;

    let landingTextInstances = [];


    useEffect(() => {
        setDimens(props);
        let device = deviceType();
        setDevType(device);
        window.addEventListener('resize', windowResized);
        return () =>
            window.removeEventListener('resize', windowResized)
    }, []);

    useLayoutEffect(() => {
        setDimens(props);
        let device = deviceType();
        setDevType(device);
        window.addEventListener('resize', windowResized);
    }, []);


    function initTextElements(p5) {
        landingName = new LandingText(p5, p5.displayWidth, "Erik Kimsey", font, textColors.white, nameDimens);
        landingTextInstances.push(landingName);

        landingTitle = new LandingText(p5, p5.displayWidth, "Software Developer", font, textColors.white, titleDimens);
        landingTextInstances.push(landingTitle);
    }

    function preload(p5) {
        font = p5.loadFont('./Dopestyle.ttf');
        img = p5.loadImage("https://i.imgur.com/7oRFsCR.png");
        fontSize = 40;
    }

    function setup(p5, canvasParentRef) {
        p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);
        initTextElements(p5);

        p5.frameRate(20);
        orbCursor = new P5Cursor(p5, 11);

    };

    function windowResized(p5) {
        if (p5) {
            // p5.resizeCanvas(p5.displayWidth, p5.displayHeight);
            // initTextElements(p5);
        }
    }

    // function drawText(p5) {
    //     if (landingName.textDrawn) {
    //         landingName.drawCompleteText();
    //     }
    //     if (landingTitle.textDrawn) {
    //         landingTitle.drawCompleteText();
    //     }

    //     if (!landingName.textDrawn) {
    //         let rIndex = Math.ceil(p5.millis() / 100) - 1;
    //         landingName.drawText(rIndex);
    //     }

    //     if (!landingTitle.textDrawn) {
    //         let rIndex = Math.ceil(p5.millis() / 100) - 1;
    //         landingTitle.drawText(rIndex);
    //     }
    // }

    function draw(p5) {
        p5.background(textColors.tankDarkBlue);
        // p5.image(img, plantXPos, plantYPos, plantW, plantH);

        // drawText(p5);

        if (devType !== "desktop") {
            // console.log(devType);
        } else {
            if (orbCursor !== undefined) {
                orbCursor.updateCursor();
            }
        }
    }


    return (
        <>
            <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />
        </>)
}
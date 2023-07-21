import React, { useEffect, useLayoutEffect, useState } from "react";
import Sketch from "react-p5";
import deviceType from "../utils/mobileDetection";
import P5Cursor from "./P5Cursor";
import BackgroundNoise from "./BackgroundNoise";
import LandingText from "./LandingText";




let x = 50;
let y = 50;
let timer = 0;

let textColors = {
  white: "#ffffff",
  pink: "#f0f",
  tankMidBlue: "#04157E",
  tankDarkBlue: "#1c1827"
}

let otherColors = {
  bkgrdPurple: "#1c1827",
  bkgrdGray: "#ff33ff"
  // bkgrdGray: "#333333"
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

  let orbCursor, landingName, landingTitle, font, fontSize, backgroundNoise;
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

    p5.frameRate(15);
    orbCursor = new P5Cursor(p5, 111);
    backgroundNoise = new BackgroundNoise(p5, 0.0, 0.0, p5.displayWidth, p5.displayHeight, otherColors.bkgrdPurple, otherColors.bkgrdGray);
  };

  function windowResized(p5) {
    if (p5) {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      initTextElements(p5);
    }
  }

  function keyPressed(p5) {
    p5.noStroke();
  }

  function draw(p5) {
    p5.background("#1C1827");

    if (devType !== "desktop") {
      // console.log(devType);
    } else {
      if (orbCursor !== undefined) {
        orbCursor.updateCursor();
      }
    }
    // if (backgroundNoise) {
    //     backgroundNoise.drawNoise();
    // }
  }


  return (
    <>
      <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} keyPressed={keyPressed} style={{ position: "fixed", top: 0, left: 0, zIndex: 0 }} />
    </>)
}
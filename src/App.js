import React, { useState, useEffect, useRef } from 'react';
import UAParser from "ua-parser-js";
import './App.scss';
import './Banner/banner.scss';
import P5Sketch from './P5Sketch/P5Sketch';
import Landing from './Landing/Landing';
import Footer from "./Footer/Footer";
import Playground from './Playground/Playground';
import SkillsExperienceParent from './SkillExperienceParent/SkillsExperienceParent';

export default function App() {
  const [toggled, setToggled] = useState(false);
  // const [pointerHeld, setPointerHeld] = useState(false);
  // const [isMobile, setIsMobile] = useState();
  // const [timeBwTaps, setTimeBwTaps] = useState(200);
  let parser = new UAParser();
  let lastClick = new Date().getTime();
  let pointerListener;


  useEffect(() => {
    if (toggled !== false) {
      setToggled(false);
    }

    let devType = parser.getDevice().type;
    if (devType === "mobile") {
      // setIsMobile(true);

      pointerListener = window.addEventListener('touchstart', () => {
        let date = new Date();
        let time = date.getTime();
        // if (time - lastClick < timeBwTaps) {
        //   console.log("tap tap");
        // }
        lastClick = time;
      });
    }

    const interval = setInterval(() => {
      // console.log('This will run every second!');
    }, 1000);


    // if (devType !== "mobile") {
    //   pointerListener = window.addEventListener('dblclick', () => {
    //     console.log("DOUBLE CLICKS");
    //   });
    // }

    // if (pointerListener) console.log(pointerListener);

    return () => {
      window.removeEventListener(pointerListener);
      // clearInterval(interval)
    }

  }, []);



  return (
    <div className="App">
      {/* <P5Sketch /> */}
      {/* <Playground /> */}
      <Landing label={"Experience"} navTo={"experience"} />
      {/* <SkillsExperienceParent /> */}
      {/* <div style={{ height: "100px" }}></div> */}
      {/* <Footer /> */}
    </div>
  );
}

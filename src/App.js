import React, { useState, useEffect } from 'react';
import UAParser from "ua-parser-js";
import './App.scss';
import './Banner/banner.scss';
// import Menu from './Nav/Menu';
import P5Sketch from './P5Sketch/P5Sketch';
import Landing from './Landing/Landing';
import Footer from "./Footer/Footer";
// import Playground from './Playground/Playground';
// import ExperienceMarquee from './Experience/ExperienceMarquee';
import SkillsExperienceParent from './SkillExperienceParent/SkillsExperienceParent';
// import Education from './Education/Education';
// import FloatingMenu from './FloatingMenu/FloatingMenu';

export default function App() {
  const [toggled, setToggled] = useState(false);
  const [pointerHeld, setPointerHeld] = useState(false);
  const [isMobile, setIsMobile] = useState();
  const [timeBwTaps, setTimeBwTaps] = useState(200);
  let parser = new UAParser();
  let lastClick = new Date().getTime();
  let pointerListener;


  useEffect(() => {
      if (toggled !== false) {
        setToggled(false);
      }
    
      let devType = parser.getDevice().type;
      if (devType === "mobile") {
        setIsMobile(true);
      
        pointerListener = window.addEventListener('touchstart', () => {
          console.log(lastClick);
          let date = new Date();
          let time = date.getTime();
          if (time - lastClick < timeBwTaps) {
            console.log("tap tap");
          
            /**
             * TODO:
             * -- dble click functionality
             */
          }
          lastClick = time;
        });
      }
    
      if (devType !== "mobile") {
        pointerListener = window.addEventListener('dblclick', () => {
          console.log("DOUBLE CLICKS");
          /**
           * TODO:
           * -- dble click functionality
           */
        });
      }
    
      if (pointerListener) console.log(pointerListener);
    
      return () => {
        window.removeEventListener(pointerListener);
      }
    
    },
    []);



  return (
    <div className="App">
      {/* <FloatingMenu /> */}
      <P5Sketch />
      {/* <Menu /> */}
      {/* <MenuHOC /> */}
      <Landing label={"Experience"} navTo={"experience"} />
      {/* <Skillset /> */}
      <SkillsExperienceParent />
      {/* <Experience /> */}
      {/* <Playground /> */}
      <div style={{ height: "100px" }}></div>
      {/* <Education /> */}
      <Footer />
    </div>
  );
}

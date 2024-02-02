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
    let parser = new UAParser();
    let lastClick = new Date().getTime();
    let pointerListener;
    let [elemSpace, setElemSpace] = useState();

    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }

        let space = document.body.scrollHeight / 3;
        setElemSpace(space)

        return () => {
            window.removeEventListener(pointerListener);
        }

    }, []);



    return (
        <div className="App">
            {/* {elemSpace && <>
        <div style={{ zIndex: 11111, position: "absolute", top: `${elemSpace * 0}px`, height: "100px", width: "200px", background: "none" }} key={1}></div>
        <div style={{ zIndex: 11111, position: "absolute", top: `${elemSpace}px`, height: "100px", width: "200px", background: "#fff" }} key={2}></div>
        <div style={{ zIndex: 11111, position: "absolute", top: `${elemSpace * 2}px`, height: "100px", width: "200px", background: "#fff" }} key={3}></div>
      </>
      } */}
            {/* <P5Sketch /> */}
            {/* <Playground /> */}
            <Landing label={"Experience"} navTo={"experience"} />
            <SkillsExperienceParent />
            <div style={{ height: "100px" }}></div>
            <Footer />
        </div>
    );
}

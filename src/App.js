import React, { useState, useEffect, useRef } from 'react';
import UAParser from "ua-parser-js";
import './App.scss';
import './Banner/banner.scss';
import P5Sketch from './P5Sketch/P5Sketch';
import Landing from './Landing/Landing';
import Footer from "./Footer/Footer";
import Loading from "./Loading/Loading";
import Playground from './Playground/Playground';
import SkillsExperienceParent from './SkillExperienceParent/SkillsExperienceParent';
// import Background from './Background/Background';
import ThreeBackground from './ThreeBackground/ThreeBackground';
import { Context } from "./context/Context"



export default function App() {

    const [toggled, setToggled] = useState(false);
    let parser = new UAParser();
    let lastClick = new Date().getTime();
    let pointerListener;
    let [elemSpace, setElemSpace] = useState();
    let [headerAnimComplete, setHeaderAnimComplete] = useState(false);

    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }

        let space = document.body.scrollHeight / 3;
        setElemSpace(space)
    }, []);

    return (
        <div className="App">
            <Context.Provider value={{ headerAnimComplete, setHeaderAnimComplete }}>
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
                {
                    headerAnimComplete ? <ThreeBackground /> : <div className='absolute top-0 bg-violet-500 w-32 h-32'></div>
                }
                {/* <Background /> */}
            </Context.Provider>
        </div >
    );
}


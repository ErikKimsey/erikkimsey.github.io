import React, { useState, useEffect, useRef } from 'react';
import UAParser from "ua-parser-js";
import './App.scss';
import './Banner/banner.scss';
import Landing from './Landing/Landing';
import Footer from "./Footer/Footer";
import SkillsExperienceParent from './SkillExperienceParent/SkillsExperienceParent';
import { Context } from "./context/Context"
// import { Loader } from '@react-three/drei';
import bkgrd_video from "./assets/videos/ek_dot_com_bkgrd_video.webm";



export default function App() {

    const [toggled, setToggled] = useState(false);
    let [headerAnimComplete, setHeaderAnimComplete] = useState(false);
    // const bkgrd_video; 


    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }
    }, []);

    return (
        <div className="App lg:px-20 px-5">
            {bkgrd_video &&     // <Loader}
                <video src={bkgrd_video} style={{ position: "fixed", top: 0, left: 0, zIndex: 0 }} autoPlay />
            }
            <Context.Provider value={{ headerAnimComplete, setHeaderAnimComplete }}>
                <div className='background-image'></div>
                <Landing label={"Experience"} navTo={"experience"} />
                <SkillsExperienceParent />
                <div style={{ height: "100px" }}></div>
                <Footer />
            </Context.Provider>
        </div >
    );
}


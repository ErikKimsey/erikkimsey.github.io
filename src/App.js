import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './Banner/banner.scss';
import Menu from './Nav/Menu';
import P5Sketch from './P5Sketch/P5Sketch';
import Landing from './Landing/Landing';
// import Playground from './Playground/Playground';
import Experience from './Experience/Experience';
import Footer from "./Footer/Footer";
import Playground from './Playground/Playground';
import MenuHOC from './Nav/MenuHOC';
import ExperienceMarquee from './Experience/ExperienceMarquee';
import Skillset from './Skillset/Skillset';
import SkillsExperienceParent from './SkillExperienceParent/SkillsExperienceParent';

export default function App() {
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }
    }, []);

    return (
        <div className="App">
            <P5Sketch />
            {/* <Menu /> */}
            {/* <MenuHOC /> */}
            <Landing label={"Experience"} navTo={"experience"} />
            {/* <Skillset /> */}
            <SkillsExperienceParent />
            {/* <Experience /> */}
            {/* <Playground /> */}
            <div style={{ height: "100px" }}></div>
            <Footer />
        </div>
    );
}

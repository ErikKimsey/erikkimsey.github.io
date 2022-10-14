import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './Banner/banner.scss';
import Landing from './Landing/Landing';
import Playground from './Playground/Playground';
import Experience from './Experience/Experience';
import Footer from "./Footer/Footer";
import P5Sketch from './P5Sketch/P5Sketch';
import LandingScreenItem from './Landing/LandingScreenItem';

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
            <Landing />
            <Playground />
            {/* <Experience /> */}
            <Routes>
                {/* <Route path="/" element={<LandingScreenItem label={"Experience"} navTo={"experience"} />} /> */}
                <Route path="/" element={<Experience />} />
            </Routes>
            <Footer />
        </div>
    );
}

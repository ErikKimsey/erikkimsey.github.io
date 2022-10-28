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
            <Menu />
            <Landing label={"Experience"} navTo={"experience"} />
            <Experience />
            {/* <Routes>
                <>
                    <Route exact path="/" element={<Landing label={"Experience"} navTo={"experience"} />} />
                    <Route path="/experience" element={<Experience />} />
                </>
            </Routes> */}
            <Footer />
        </div>
    );
}

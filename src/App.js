import { useState, useEffect } from 'react';
import './App.scss';
import './Banner/banner.scss';
import LandingScreen from './Landing/LandingScreen';
import Footer from "./Footer/Footer";
import SkillsExperienceParent from './SkillExperienceParent/SkillsExperienceParent';
import Skillset from './Skillset/Skillset';
import Experience from './Experience/Experience';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Context } from "./context/Context"
import VideoBackground from "./VideoBackground/VideoBackground";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** */
/**
 * https://codesandbox.io/p/sandbox/github/benhowell/react-grid-gallery/tree/master/examples/with-react-image-lightbox
 * */
/** */

export default function App() {

    const [toggled, setToggled] = useState(false);
    let [headerAnimComplete, setHeaderAnimComplete] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }
    }, []);

    return (
        <MotionConfig reducedMotion="user">
        <div >
            {/* <VideoBackground /> */}
            <ThemeToggle />

            <Context.Provider value={{ headerAnimComplete, setHeaderAnimComplete }}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/"
                            element={
                                <LandingScreen />
                            }
                        />
                        <Route
                            path="/skillset"
                            element={
                                <>
                                    <Skillset />
                                    <div style={{ height: "100px" }}></div>
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="/experience"
                            element={
                                <>
                                    <Experience />
                                    <div style={{ height: "100px" }}></div>
                                    <Footer />
                                </>
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </Context.Provider>
        </div >
        </MotionConfig>
    );
}


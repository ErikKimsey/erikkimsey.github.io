import { useState, useEffect } from 'react';
import './App.scss';
import './Banner/banner.scss';
import Landing from './Landing/Landing';
import Footer from "./Footer/Footer";
import SkillsExperienceParent from './SkillExperienceParent/SkillsExperienceParent';
import Skillset from './Skillset/Skillset';
import Experience from './Experience/Experience';
import { Routes, Route } from 'react-router-dom';
import { Context } from "./context/Context"
import VideoBackground from "./VideoBackground/VideoBackground";
import LandingImageGallery from './ImageGallery/LandingImageGallery';
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

    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }
    }, []);

    return (
        <div className="App">
            {/* <VideoBackground /> */}
            <Context.Provider value={{ headerAnimComplete, setHeaderAnimComplete }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Landing label={"Experience"} navTo={"experience"} />
                                {/* <div className='background-image'> */}
                                {/* <LandingImageGallery /> */}
                                {/* </div> */}

                                {/* <SkillsExperienceParent /> */}
                                <div style={{ height: "100px" }}></div>
                                <Footer />
                            </>
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
            </Context.Provider>
        </div >
    );
}


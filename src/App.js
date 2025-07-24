import { useState, useEffect } from 'react';
import './App.scss';
import './Banner/banner.scss';
import Landing from './Landing/Landing';
import Footer from "./Footer/Footer";
import SkillsExperienceParent from './SkillExperienceParent/SkillsExperienceParent';
import { Context } from "./context/Context"
import VideoBackground from "./VideoBackground/VideoBackground";




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
            <VideoBackground />
            <Context.Provider value={{ headerAnimComplete, setHeaderAnimComplete }}>
                <Landing label={"Experience"} navTo={"experience"} />
                <div className='background-image'></div>
                <SkillsExperienceParent />
                <div style={{ height: "100px" }}></div>
                <Footer />
            </Context.Provider>
        </div >
    );
}


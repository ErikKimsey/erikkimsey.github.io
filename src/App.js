import React, { useState, useEffect } from 'react';
import './App.scss';
import './Banner/banner.scss';
import Landing from './Landing/Landing';
import Footer from "./Footer/Footer";
import { Context, ModalProvider } from "./context/Context"



export default function App() {

    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }

        let space = document.body.scrollHeight / 3;
    }, []);

    return (
        <div className="App">
            <Context.Provider>
                <ModalProvider>
                    <div className='background-image'></div>
                    <Landing label={"Experience"} navTo={"experience"} />
                    <div style={{ height: "100px" }}></div>
                    <Footer />
                </ModalProvider>
            </Context.Provider>
        </div >
    );
}


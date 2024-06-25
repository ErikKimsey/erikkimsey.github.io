import React, { useEffect, useState } from "react";


import posterImage from "../assets/images/blackpill.png";
import videoUrl from "/Users/erikkimsey/Desktop/erik_kimsey_portfolio_playground/src/assets/images/erikkimsey_blender_render.mp4";

import "./videobackground.css";



export default function VideoBackground() {

    let [poster, setPoster] = useState()
    let [video, setVideo] = useState()

    useEffect(() => {
        setPoster(posterImage);
        setVideo(videoUrl)
    })

    return (
        <div className="video-background-container">
            {
                video && <video autoPlay muted loop poster={poster}>
                    <source src={video} type="video/mp4" />
                </video>

            }
        </div>
    )
}
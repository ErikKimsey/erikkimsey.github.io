import { useEffect, useState } from "react";
import videoUrl from "../assets/videos/ek_dot_com_bkgrd_video.webm";
import "./videobackground.css";



export default function VideoBackground() {

    let [video, setVideo] = useState()

    useEffect(() => {
        setVideo(videoUrl)
    })

    return (
        <div className="video-background-container">
            {
                video && <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>

            }
        </div>
    )
}
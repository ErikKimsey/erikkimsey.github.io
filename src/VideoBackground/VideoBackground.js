import { useEffect, useState } from "react";
import "./videobackground.css";
import videoUrl from "../assets/videos/ek_dot_com_bkgrd_video.webm";
import posterImg from "../assets/images/gem_ring_mobile.png";


export default function VideoBackground() {

    let [video, setVideo] = useState()
    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setVideo(videoUrl);


        if (window.innerWidth <= 768) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, [])

    return (
        <div className="video-background-container">
            {
                isMobile ?
                    <img src={posterImg} alt="Gem Ring" />
                    :

                    <video className="video-background-video" src={video} type="video/mp4" autoPlay muted loop />

            }
        </div>
    )
}

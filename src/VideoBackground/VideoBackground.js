import { useEffect, useState } from "react";
import "./videobackground.css";
import videoUrl from "../assets/videos/07_29_25v2.webm";
import posterImg from "../assets/images/gem_ring_mobile.png";


export default function VideoBackground() {

    let [video, setVideo] = useState()
    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setVideo(videoUrl);


        if (window.innerWidth <= 960) {
            setIsMobile(false);
        }
        else {
            setIsMobile(false);
        }
    }, [])

    return (
        <div className="w-auto">
            <VideoComponent video={video} />
        </div>
        // <div className="w-full ">
        //     {
        //         isMobile ?
        //             <img src={posterImg} alt="Gem Ring" />
        //             :
        //             <VideoComponent video={video} />
        //     }
        // </div>
    )
}

function VideoComponent(props) {
    let { video } = props;

    let [shouldPlay, setShouldPlay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShouldPlay(true);
        }, 1000);
    }, []);

    return (
        <>
            {shouldPlay &&
                <video className="w-auto" src={video} type="video/mp4" autoPlay muted />
            }
        </>
    );
}
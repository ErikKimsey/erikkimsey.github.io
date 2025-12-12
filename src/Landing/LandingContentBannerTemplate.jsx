import { useRef, useState, useEffect } from "react";
import VideoBackground from "../VideoBackground/VideoBackground";
import "./landingContentBannerTemplate.scss";


const LandingContentBannerTemplate = ({ children }) => {


    return (
        <div className="fixed z-0 top-1/3 left-0 w-auto sm:w-full h-96 px-2 lg:px-10 flex flex-row flex-wrap overflow-clip">
            {children}

        </div>
    )
}

export { LandingContentBannerTemplate }
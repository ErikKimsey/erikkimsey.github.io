import { useRef, useState, useEffect } from "react";
import VideoBackground from "../VideoBackground/VideoBackground";
import "./landingContentBannerTemplate.scss";


const LandingContentBannerTemplate = ({ children }) => {


    return (
        <div className="fixed z-0 top-0 left-0 w-auto sm:w-full h-full px-2 lg:px-10 flex flex-row justify-end flex-wrap overflow-clip">
            <div className=" z-0 left-0 w-auto sm:w-full px-2 lg:px-10 flex justify-end items-center overflow-clip">
                {children}
            </div>

        </div>
    )
}

export { LandingContentBannerTemplate }
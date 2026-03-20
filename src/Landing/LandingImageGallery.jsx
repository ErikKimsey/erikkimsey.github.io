import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { EXPERIENCE_DATA } from "../Experience/experience_data";
import "react-image-gallery/styles/css/image-gallery.css";


export default function LandingImageGallery() {

    const [xpImgs, setXpImgs] = useState([]);


    useEffect(() => {
        if (EXPERIENCE_DATA && EXPERIENCE_DATA.length > 0) {
            let imgAr = EXPERIENCE_DATA.map((e) => {
                if (typeof e.video === "string" && e.video.length > 0) {
                    return e.video
                } else {
                    return e.imgs[0];
                }
            })
            setXpImgs(imgAr)
            console.log("is this being called soidgjbosdkfg times?");
        }
    }, []);

    function isVideoFile(filename) {
        const videoExtensions = [".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mp4", ".m4a", ".f4v", ".m4b", ".mov", ".webm"]; // Add more as needed
        const extension = filename.toLowerCase().substring(filename.lastIndexOf("."));
        return videoExtensions.includes(extension);
    }


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            {/* {xpImgs.length > 0 &&
                <ImageCarousel imgs={xpImgs} />

            } */}
        </>
    )
}

// const LANDING_IMG_GALLERY_LINKS = [
//     "https://res.cloudinary.com/dfez8ez2g/video/upload/v1770647413/bebop_trailer_owevvt.mp4",
//     "https://res.cloudinary.com/dfez8ez2g/image/upload/v1764690941/cok/cok_mobile_app_1080_m3bedx.png",
//     "https://res.cloudinary.com/dfez8ez2g/image/upload/v1763598610/chartiq/chartiq_etor.png",

// ]
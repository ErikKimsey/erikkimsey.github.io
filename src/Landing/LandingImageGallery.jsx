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
            {xpImgs.length > 0 &&
                <Carousel
                    // className="h-48"
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    autoPlay={false}
                    // ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={10000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        xpImgs.map((e) => {
                            if (isVideoFile(e)) {
                                return <div>video</div>
                                // return <video src={e} type="video/mp4" autoPlay muted controls />
                            } else {
                                return <img src={e} />
                            }
                        })
                    }
                </Carousel>

            }
        </>
    )
}
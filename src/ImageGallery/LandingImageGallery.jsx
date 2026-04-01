import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import "./landingImageGallery.css";
import { useEffect, useState, useRef } from "react";

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];

export default function LandingImageGallery() {

    const ref = useRef(null);
    const [elWidth, setElWidth] = useState(0);

    const [pixelWidth, setPixelWidth] = useState();

    useEffect(() => {
        if (ref.current) setElWidth(ref.current.offsetWidth);
        if (images.length > 0) {
            let len = images.length * 200;
            console.log(len);
            setPixelWidth(len);
            console.log(pixelWidth);
        }
    }, []);




    return (
        <div className=" w-[100vw] h-40 overflow-x-scroll overflow-y-clip mb-2">
            {pixelWidth &&
                <div className={`relative flex flex-row w-[${pixelWidth}px]`}>
                    {
                        images.map((image, index) => {
                            return (
                                <img
                                    className="p-2  w-[300px] shrink-0"
                                    key={`${image.original}-${index}`}
                                    src={image.original}
                                    alt={`Gallery image ${index + 1}`}
                                />
                            );
                        })
                    }
                </div>
            }
        </div>
    )
    {/* 
            <div className="absolute flex flex-row h-40 w-full overflow-x-scroll overflow-y-hidden top-0 right-0 lg:flex-col lg:h-[90vh] lg:w-60 lg:overflow-y-scroll lg:overflow-x-hidden lg:right-10">
                <div className="flex flex-row lg:flex-col">
                    {
                        images.map((image, index) => {
                            return (
                                <img
                                    className="p-2 h-36 w-auto shrink-0 lg:h-auto lg:w-full lg:shrink"
                                    key={`${image.original}-${index}`}
                                    src={image.original}
                                    alt={`Gallery image ${index + 1}`}
                                />
                            );
                        })
                    }
                </div> */}



}
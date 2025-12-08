import React, { useEffect, useState, useRef, Suspense } from 'react';
import ReactPlayer from 'react-player'
import './demos.scss';


const DemoInstance = ({ index }) => {

    const vidRef = useRef();
    return (
        <Suspense >
            <div className='demo-instance-container'
                style={{ background: index % 2 == 0 ? "hotpink" : "aqua" }}
            >
                <video
                    className='react-video-player'
                    ref={vidRef} src="https://res.cloudinary.com/dfez8ez2g/video/upload/v1717026266/plasma_globe_a0gdff.mov" />
                <div className='text-content'>
                    <p>Cutting-edge Chinese Babylon jack in octagon précis run. Cybernetic professional construct psychoactive virus ganja laser-scrawled microprocessor bullshit. Ganja concrete ROM neural biz electronic Chiba consortium hoverport cable magnetic cybernetic crack. </p>
                </div>
            </div>
        </Suspense>
    )
}

const DemosContainer = () => {

    // const qty = ;
    const [items, setItems] = useState([]);

    useEffect(() => {
        for (let index = 0; index < qty; index++) {

            items.push(<DemoInstance index={index} />)
        }
    }, [])

    return (
        <div className="demos-container">
            <div className='demo-videos-container'>
                {
                    items
                }
            </div>
        </div>
    );
};

export default DemosContainer;
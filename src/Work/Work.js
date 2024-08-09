import React, { useState } from 'react';
import './work.scss';
import { data } from './data';



export default function Work() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const goToPrev = () => {
        console.log(currentIndex);

        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className="work-container">
            <div className='coming-soon-container'>

                <img src={"https://i.imgur.com/7yDJwj1.png"} />
            </div>
            {/* <div className='coming-soon-container'>


            </div> */}
        </div>
    );
}



import React, { useState } from 'react';
import './work.scss';
import { data } from './data';



export default function Work() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className="work-container">
            {data.map((e, i) => {
                return (
                    <div
                        className={`carousel-item ${i === currentIndex ? 'active' : ''}`}
                        key={i}
                    >
                        <div key={e.title} className="data-item-container">


                            <img src={e.img} className='image' />

                            <div className="item-name data-item-general" style={{ fontSize: '2rem' }}>
                                {e.title}
                            </div>
                            <div className="item-stack data-item-general">{e.role}</div>
                            <div className="">{e.technology}</div>
                        </div>
                    </div>
                );

            }
            )}
            <button onClick={goToPrev} className="carousel-button prev">‹</button>
            <button onClick={goToNext} className="carousel-button next">›</button>
        </div>
    );
}



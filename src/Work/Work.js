import React, { useEffect } from 'react';
import './work.scss';
import { data } from './data';
import Slider from 'react-slick';
import { BREAKPOINTS as bp } from '../styles/breakPoints';

let sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: bp.smDevice,
            sliderSettings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: bp.mdDevice,
            sliderSettings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default function Work() {

    // const [] = useState();

    useEffect(() => {
        document.querySelector('.data-item-container').focus();
        window.addEventListener('keypress', (e) => {
            let code = e.which || e.keyCode;

            if (code === '37') this.previous();
            if (code === '39') this.next();
        });
    }, []);

    const next = () => {
        this.slider.slickNext();
    };

    const previous = () => {
        this.slider.slickPrev();
    };


    return (
        <div className="work-container">
            <Slider ref={(c) => (this.slider = c)} {...sliderSettings} className="work-data-list-contaner">
                {data.map((e, i) => {
                    if (i === 0) {
                        return (
                            <div key={e.name} className="data-item-container">
                                <div className="item-name data-item-general" style={{ fontSize: '2rem' }}>
                                    {e.name}
                                </div>
                                <div className="item-stack data-item-general">{e.stack}</div>
                                <div className="">{e.about}</div>
                            </div>
                        );
                    } else if (e.github === '') {
                        return (
                            <div key={e.name} className="data-item-container">
                                <div className="item-name data-item-general">{e.name}</div>
                                <div className="item-stack data-item-general">{e.stack}</div>
                                <div className="item-description data-item-general" />
                                <div className="item-url url-and-github-styles data-item-general">
                                    <a href={e.url} target="_blank" rel="noopener noreferrer">
                                        The Product.
                                    </a>
                                </div>
                                <div className="">{e.about}</div>
                            </div>
                        );
                    } else if (e.url === '') {
                        return (
                            <div key={e.name} className="data-item-container">
                                <div className="item-name data-item-general">{e.name}</div>
                                <div className="item-stack data-item-general">{e.stack}</div>
                                <div className="item-description data-item-general" />
                                <div className="item-github url-and-github-styles data-item-general">
                                    <a href={e.github} target="_blank" rel="noopener noreferrer">
                                        The Code.
                                    </a>
                                </div>
                                <div className="">{e.about}</div>
                            </div>
                        );
                    }
                    return (
                        <div key={e.name} className="data-item-container">
                            <div className="item-name data-item-general">{e.name}</div>
                            <div className="item-stack data-item-general">{e.stack}</div>
                            <div className="item-description data-item-general" />
                            <div className="item-url url-and-github-styles data-item-general">
                                <a href={e.url} target="_blank" rel="noopener noreferrer">
                                    The Product.
                                </a>
                            </div>
                            <div className="item-github url-and-github-styles data-item-general">
                                <a href={e.github} target="_blank" rel="noopener noreferrer">
                                    The Code.
                                </a>
                                <div className="">{e.about}</div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}



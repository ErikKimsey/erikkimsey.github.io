import React, { useEffect, useRef, useState } from 'react';
import "./playground.scss";
import Traveling from '../ThreeSketches/Traveling';
import Loading from '../Loading/Loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirFreshener, faPaintBrush, faSprayCan, faPalette } from "@fortawesome/free-solid-svg-icons";
import { Html, useProgress } from "@react-three/drei";
import Redundancy from './Redundancy/Redundancy';

import Background from '../Background/Background';

export default function Playground() {

    let { progress } = useProgress();
    let [divDimens, setDivDimens] = useState();
    let [loading, setLoading] = useState(true);

    const playgroundContentRef = useRef();

    useEffect(() => {
        let w = playgroundContentRef.current.offsetWidth;
        let h = playgroundContentRef.current.offsetHeight;
        setDivDimens({ w: w, h: h });
    }, []);

    return (
        <div className="playgroundContainer" id="playgroundContainer">
            <div className='playgroundHeader'>
                <div className='labelContainer'>
                    <div className='label'>Playground</div>
                    <div>Multimedia sketches.</div>
                </div>
                <div className='sketchesTextContainer'>
                    See past sketches:
                    <a target="_blank" href="https://github.com/erikkimsey">
                        <FontAwesomeIcon icon={faPalette} size="2x" />
                    </a>
                </div>

            </div>
            <div className='playgroundContent' ref={playgroundContentRef}>
                {<h1 style={{ width: "min-content", color: "#fff", fontSize: "80px", transform: "rotate(-15deg)" }}>Coming Soon.</h1>}
                {/* {progress < 100 ? <Loading /> : <Traveling dimens={divDimens} />} */}
                {/* {divDimens && <Background dimens={divDimens} />} */}
            </div>
        </div>
    );
}

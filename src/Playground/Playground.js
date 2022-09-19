import React, { useEffect, useRef, useState } from 'react';
import "./playground.scss";
import Traveling from '../ThreeSketches/Traveling';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirFreshener, faPaintBrush, faSprayCan, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Playground() {

    let [divDimens, setDivDimens] = useState();
    const playgroundContentRef = useRef();

    useEffect(() => {
        let w = playgroundContentRef.current.offsetWidth;
        let h = playgroundContentRef.current.offsetHeight;
        setDivDimens({ w: w, h: h });
    }, []);

    return (
        <div className="playgroundContainer" >
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
                {divDimens && <Traveling dimens={divDimens} />}
            </div>
        </div>
    );
}

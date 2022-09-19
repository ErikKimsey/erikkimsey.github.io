import React, { useEffect, useState, useRef } from 'react';
import "./experience.scss";
import { EXPERIENCE_DATA } from "./experience_data";
import ExperienceItem from './ExperienceItem';

export default function Experience() {

    const containerRef = useRef();
    const [data, setData] = useState();

    useEffect(() => {
        if (EXPERIENCE_DATA && EXPERIENCE_DATA.length > 0) {
            setData(EXPERIENCE_DATA);
        }
    }, []);

    return (
        <div className="experienceContainer" ref={containerRef}>
            <div className='experienceHeader'>
                <div className='label'>Experience In Brief</div>
            </div>
            <div className='experienceContent'>
                {
                    data && data.map((e, i) => {
                        return <ExperienceItem name={e.name} stack={e.stack} about={e.about} key={i} />
                    })
                }
            </div>
        </div>
    );
}

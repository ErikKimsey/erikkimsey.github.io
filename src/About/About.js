import React, { useState, useEffect } from 'react';
import './about.scss';
import { EDUCATION, PROFESSIONAL_DATA, SKILLSET_OVERVIEW } from '../__data/data';
import Education from './components/Education';
import Employment from './components/Employment';
import Resume from './components/Resume';
import Skillset from './components/Skillset';
import ScrollArrow from '../ScrollArrow/ScrollArrow';

export default function About() {

    const [hasArrowed, setHasArrowed] = useState(false);

    return (
        <div className="about-container">
            <ScrollArrow />
            <div className="resume-skillset-block">
                <Skillset data={SKILLSET_OVERVIEW} />
                <Resume />
            </div>
            <div className="professional-history-block-container">
                <div className="block-label">Work History</div>
                {PROFESSIONAL_DATA.map((e, i) => {
                    return <Employment key={i} data={e} />;
                })}
            </div>
            <div className="education-block-container">
                <div className="block-label">Education</div>
                {EDUCATION.map((e, i) => {
                    return <Education key={i} data={e} />;
                })}
            </div>
        </div>
    );
}

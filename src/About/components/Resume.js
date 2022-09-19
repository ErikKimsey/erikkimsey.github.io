import React from "react";
import "./styles/resume.scss";
// import resumePDF from '../../assets/resume/erik_kimsey_resume__UX_engineer.pdf';
import resumeShot from "../../assets/resume/resume_shot_small.png";
import resumePDF from "./erikkimsey_creativeEngineer_resume.pdf";
// import

export default function Resume() {
    return (
        <div className="resume-container" id="RESUME">
            <div className="text-container resume-sub-container">
                <div className="resume-text">Resume</div>
            </div>
            <div className="image-container resume-sub-container">
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                    {/* <i className="far fa-file-pdf fa-10x" /> */}
                    <img src={resumeShot} alt="Snapshot of printable resume" />
                </a>
            </div>
        </div>
    );
}

import "./styles/resume.scss";
import resumeShot from "../../assets/resume/resume_shot_small.png";
import resumePDF from "./erikkimsey_creativeEngineer_resume.pdf";

export default function Resume() {
    return (
        <div className="resume-container" id="RESUME">
            <div className="text-container resume-sub-container">
                <div className="resume-text">Resume</div>
            </div>
            <div className="image-container resume-sub-container">
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                    <img src={resumeShot} alt="Snapshot of printable resume" />
                </a>
            </div>
        </div>
    );
}

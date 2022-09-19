import React, { } from "react";
import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faAirFreshener, faPaintBrush, faSprayCan, faPalette } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/fontawesome-svg-core"
import { } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faSoundcloud, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "./erikkimsey_creativeEngineer_resume.pdf";

export default function Footer() {
    return (
        <div className="footerContainer">

            <div className="linksContainer">
                <a target="_blank" href="https://github.com/erikkimsey">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a target="_blank" href="https://github.com/erikkimsey">
                    <FontAwesomeIcon icon={faSoundcloud} size="3x" />
                </a>
                <a target="_blank" href="https://github.com/erikkimsey">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a target="_blank" href={resume}>
                    <FontAwesomeIcon icon={faFloppyDisk} size="3x" />
                </a>
                <div className="resumeText">Resume</div>
            </div>
            <div className="textItemContainer">
                <div className="textItem">Erik Kimsey</div>
                <div className="textItem">Software Developer</div>
                <div className="textItem">kimseyerik@gmail.com</div>
            </div>
        </div>
    )
}
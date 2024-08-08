import React, { useRef, useState, useEffect, useContext } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ModalContext from "../context/Context";
import Modal from "../Modal/Modal";
import SkillsExperienceParent from "../SkillExperienceParent/SkillsExperienceParent";
import Work from "../Work/Work";

function Landing() {
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });

    const { child } = useContext(ModalContext);

    useEffect(() => {
        if (sketchRef.current) {
            setDimens({ w: sketchRef.current.offsetWidth, h: sketchRef.current.offsetHeight });
        }
    }, [])

    return (
        <div
            className="landing-container"
            id="landing-container"
            ref={sketchRef}
        >
            <Banner timerTime={3000} />
            <Modal>
                {
                    child === 0 ? <SkillsExperienceParent /> : <Work />
                }
            </Modal>
        </div>
    );
}


export default Landing;

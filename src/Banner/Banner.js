import React, { useEffect, useState } from "react";
import "./banner.scss";
import "../Nav/Nav";
// import { Spin } from "react-burgers";

const ROLES = [
    'Software Developer',
    'Frontend Developer',
    'Creative Technologist',
    'Full-Stack Developer',
    'Software Engineer',
    'UI Engineer',
]

export default function Banner(props) {
    let { timerTime } = props;
    let [iconActive, setIconActive] = useState(false);
    let [timer, setTimer] = useState(3000);
    let [rolesIndex, setRolesIndex] = useState(0);
    let [currRole, setCurrRole] = useState();

    useEffect(() => {
        let interval = null;
        setIconActive(props.isActive);
        setTimer(timerTime);
        // interval = setInterval(() => {
        //     iterateRoles();
        // }, timer);
        // return () => clearInterval(interval);
    }, [])

    // function handleToggle() {
    //     props.toggle();
    // };

    useEffect(() => {
        changeRole();
    }, [rolesIndex])


    function iterateRoles() {
        if (rolesIndex < ROLES.length) {
            setRolesIndex(rolesIndex++);
        } else {
            setRolesIndex(0);
        }
    }

    function changeRole() {
        setCurrRole(ROLES[rolesIndex]);
    }

    return (
        <div className="banner-container">
            <div className="text-container">
                <div className="name banner-item">Erik Kimsey</div>
                <div className="underscore banner-item"></div>
                {currRole && timer && <div className="role banner-item" data-text={currRole}>{currRole}</div>}
            </div>
        </div>
    );
}


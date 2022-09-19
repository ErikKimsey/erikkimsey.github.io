import React, { useEffect, useState } from "react";
import "./banner.scss";
import "../Nav/Nav";
// import { Spin } from "react-burgers";

export default function Banner(props) {
    const [iconActive, setIconActive] = useState(false);

    useEffect(() => {
        setIconActive(props.isActive);
    }, [])

    function handleToggle() {
        props.toggle();
    };

    return (
        <div className="banner-container">
            <div className="text-container">
                <div className="name banner-item">Erik Kimsey</div>
                <div className="underscore banner-item"></div>
                <div className="role banner-item">Creative Developer</div>
            </div>
        </div>
    );
}


import React, { } from "react";
import "./modal.scss";

export default function Modal(children) {

    return (
        <div className="modalContainer">
            <div className="contentContainer">
                {children}
            </div>
        </div>
    )

}
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
import "../styles/responsive.scss";
// import Banner from "../Banner/Banner";
// import resumePDF from "./erikkimsey_creativeEngineer_resume.pdf";

const activeStyles = {
    color: "#AA5EF4",
};

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    handleToggle = () => {
        let navContainer = document.querySelector(".nav-container");
        navContainer.classList.toggle("active");
        this.setState({ isActive: !this.state.isActive });
    };

    handleHover = (e) => {
        let label = document.createElement("NavLink");
        label.className = "hover-label";
        label.innerHTML = e.target.title;
    };

    render() {
        return (
            <div className="nav-container">
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/playground" className="nav-item">Playground</NavLink>
                <NavLink to="/experience" className="nav-item">Experience</NavLink>
            </div>
        );
    }
}

export default Nav;

import React from "react";
import "./homepage.css";
import logo from '../Homepage.png';

export default function homepage() {
    return (
        <div className="homepage">
            <div className="lander">
            <hr />
                <h3>Future Homescreen... work in progress</h3>
                <img src={logo} alt="Logo" align="center"/>
            </div>
        </div>
    );
}
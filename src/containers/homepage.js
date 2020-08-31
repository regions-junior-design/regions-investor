import React from "react";
import "./homepage.css";
import logo from '../Homepage.png';

export default function homepage() {
    return (
        <div className="homepage">
            <div className="lander">
            <hr />
                <img src={logo}  className='fullimg' alt="Logo" align="center"/>
            </div>
        </div>
    );
}
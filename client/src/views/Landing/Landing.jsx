import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import Logo from "../../assets/F1_new_logo.png";


const Landing = () => {
    return(
        <>
      <div className="landing-container">
        <img className="landing-logo" src={Logo} alt="image-drivers" width="350px" height="80px"/>

        <div className="landing-title">
         <h1>Welcome to <b>Drivers</b></h1>
        </div>
         <div className="landing-text">
         <p>This is the app that brings together your favorite Formula 1 racers.</p>
         </div>
         <Link className="landing-link" to="/home">
            <button className="landing-button">Let's get started</button>
        </Link>
      </div>
        </>
    )
}

export default Landing;
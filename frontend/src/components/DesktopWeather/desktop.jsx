import React from "react";
import "./desktop.css";
import logo from "./Icons/logo.svg";

function DesktopWeather() {
  return (
    <div className="main_container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt={logo} />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Detail daily forecast</a>
            </li>
            <a href="#">Detail daily forecast</a>
          </ul>
        </div>
      </div>
      <div className="main_info">
        <div className="city">
          <p>Berlin</p>
        </div>
        <div className="current_temperature">
          <p>-2°</p>
        </div>
      </div>
    </div>
  );
}

export default DesktopWeather;

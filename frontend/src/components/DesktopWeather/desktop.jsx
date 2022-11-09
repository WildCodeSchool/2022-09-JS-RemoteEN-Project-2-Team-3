import React from "react";
import logo from "./Icons/logo.svg";
import "./desktop.css";

function DesktopWeather({ weatherData }) {
  return (
    <div className="main_container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt={logo} />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#daily">Detail daily forecast</a>
            </li>
            <a href="#weekly">Detail weekly forecast</a>
          </ul>
        </div>
      </div>
      {weatherData && (
        <div className="main_info">
          <div className="city">
            <p>{weatherData.name}</p>
          </div>
          <div className="current_temperature">
            <p>{Math.round(weatherData.main.temp)}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesktopWeather;

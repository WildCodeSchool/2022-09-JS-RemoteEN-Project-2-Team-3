import React from "react";
import logo from "./Icons/logohd.png";
import "./desktop.css";

function DesktopWeather({ weatherData }) {
  return (
    <div className="main_container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#hourly">Detail hourly forecast</a>
            </li>
            <li>
              <a href="#weekly">Detail weekly forecast</a>
            </li>
            <li>
              <a href="#sun_moon">Sun and Moon time</a>
            </li>
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
          <div className="weather_icon">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="icon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DesktopWeather;

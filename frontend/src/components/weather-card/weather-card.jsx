import "./weather-card.css";
import React, { useContext } from "react";
import ReactSwitch from "react-switch";
import ThemeContext from "../../contexts/ThemeContext";
import humidity from "./Icons/humidity.png";
import atmospheric from "./Icons/atmospheric.png";
import airQuality from "./Icons/airQuality.png";
import wind from "./Icons/wind.png";
import uv from "./Icons/uv.png";
import logo from "./Icons/logohd.png";
import search from "./Icons/searchButton.svg";

function WeatherCard({
  handleChange,
  keyDownHandler,
  location,
  air,
  weatherData,
  onClickHandler,
  dailyWeather,
  geoLocation,
}) {
  const date = new Date();
  const setDate = date.toDateString();
  const { isDark, setisDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setisDark(!isDark);
  };

  return (
    <div className="weather-card">
      <header>
        <div className="logo_card">
          <img src={logo} alt={logo} />
        </div>
        <div className="switch">
          <label>{isDark ? "Dark Mode" : "Light Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={isDark === true} />
        </div>
      </header>
      <div className="search_section">
        <div className="search">
          <input
            value={location}
            onChange={handleChange}
            onKeyDown={keyDownHandler}
            placeholder="Search city"
            type="text"
          />
          <button type="button" onClick={onClickHandler}>
            <img src={search} alt="search" />
          </button>
        </div>
        <button type="button" id="geolocation" onClick={geoLocation}>
          Get location
        </button>
      </div>

      {weatherData && dailyWeather && (
        <>
          <div className="city-name">
            <p>{weatherData.name}</p>
          </div>
          <div className="today-date">{setDate}</div>
          <div className="current-temperature">
            <p>{Math.round(weatherData.main.temp)}°C</p>
            <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
            <p>{weatherData.weather[0].main}</p>
          </div>
          <div className="extra-info">
            <ul>
              <li>
                Humidity: {weatherData.main.humidity}%
                <img src={humidity} alt="humidity" />
              </li>
              <li>
                Wind: {Math.round(weatherData.wind.speed)} km/h
                <img src={wind} alt="wind" />
              </li>
              <li>
                Air quality: {air.list[0].main.aqi}
                <img src={airQuality} alt="air_quality" />
              </li>
              <li>
                UV-Index: {dailyWeather.current.uvi}
                <img src={uv} alt="uv" />
              </li>
              <li>
                Pressure: {weatherData.main.pressure} hPa
                <img src={atmospheric} alt="atmospheric" />
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherCard;

import "./weather-card.css";
import axios from "axios";
import React from "react";

function WeatherCard() {
  const [weatherData, setWeatherData] = React.useState();
  // const [air, setAir] = React.useState();
  const [location, setLocation] = React.useState("London");

  const API_KEY = import.meta.env.VITE_WEATHERSTACK_API_KEY;

  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`;

  const searchLocation = () => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        setWeatherData(data);
      });
  };

  // const urlTwo = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherData.location.lat}&lon=${weatherData.location.lon}&appid={API key}`;
  // axios
  //   .get(urlTwo)
  //   .then((response) => response.data)
  //   .then((data) => {
  //     setAir(data);
  //   });

  React.useEffect(searchLocation, []);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  };

  return (
    <div className="weather-card">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={keyDownHandler}
          placeholder="search"
          type="text"
        />
      </div>
      {weatherData && (
        <>
          <div className="city-name">
            <p>{weatherData.location.name}</p>
          </div>
          <div className="today-date">{weatherData.location.localtime}</div>
          <div className="current-temperature">
            <p>{Math.round(weatherData.current.temperature)}°C</p>
            <p>Feels like: {Math.round(weatherData.current.feelslike)}°C</p>
          </div>
          <div className="wind-speed">
            Wind: {Math.round(weatherData.current.wind_speed)}km/h
          </div>
          <div className="extra-info">
            <ul>
              <li>Humidity: {weatherData.current.humidity}%</li>
              <li>UV index: {weatherData.current.uv_index}</li>
              {/* <li>Air quality: {air.data.main.aqi}</li> */}
              <li>Pressure: {weatherData.current.pressure} hPa</li>
            </ul>
            {/* <img alt="icon" src="./Icons/humidity 1.png" /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherCard;

import "./weather-card.css";
import axios from "axios";
import React from "react";
import humidity from "./Icons/humidity.png";
import atmospheric from "./Icons/atmospheric.png";
import wind from "./Icons/wind.png";

function WeatherCard() {
  const [weatherData, setWeatherData] = React.useState();
  const [air, setAir] = React.useState();
  const [location, setLocation] = React.useState("London");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
  const secondUrl = (lon, lat) =>
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const searchLocation = () => {
    axios
      .get(baseUrl)
      .then((response) => response.data)
      .then((data) => {
        axios
          .get(secondUrl(data.coord.lon, data.coord.lat))
          .then((response) => response.data)
          .then((airPollutionData) => {
            setWeatherData(data);
            // console.log("Data:", data);
            setAir(airPollutionData);
            // console.log("Air Pollution:", airPollutionData);
          });
      });
  };

  // const searchLocationWithAsync = async () => {
  //   const data = await axios.get(baseUrl).then((response) => response.data);
  //   const airPollutionData = await axios
  //     .get(secondUrl(data.coord.lon, data.coord.lat))
  //     .then((response) => response.data);
  //   setWeatherData(data);
  //   console.log("Data:", data);
  //   setAir(airPollutionData);
  //   console.log("Air Pollution:", airPollutionData);
  // };

  React.useEffect(() => {
    searchLocation();
  }, []);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  };

  // console.log(secondUrl);

  const date = new Date();
  const setDate = date.toDateString();

  return (
    <div className="weather-card">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={keyDownHandler}
          placeholder="Search city"
          type="text"
        />
      </div>
      {weatherData && (
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
              <li>Air quality: {air.list[0].main.aqi}</li>
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

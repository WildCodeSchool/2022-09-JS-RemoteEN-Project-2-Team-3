/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import WeatherCard from "./components/weather-card/weather-card";
import Weather from "./components/DailyWeather/Weather";
import DesktopWeather from "./components/DesktopWeather/desktop";
import "./components/DailyWeather/Weather.css";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = React.useState();
  const [air, setAir] = React.useState();
  const [dailyWeather, setDailyWeather] = React.useState();
  const [location, setLocation] = React.useState("London");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const API_KEY_DAILY = import.meta.env.VITE_OPENWEATHER_DAILY_API_KEY;

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const airQualityUrl = (lon, lat) =>
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const dailyForecastUrl = (lon, lat) =>
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY_DAILY}`;

  const searchLocation = () => {
    axios
      .get(currentWeatherUrl)
      .then((response) => response.data)
      .then((data) => {
        axios
          .get(airQualityUrl(data.coord.lon, data.coord.lat))
          .then((response) => response.data)
          .then((airPollutionData) => {
            setWeatherData(data);
            // console.log("Data:", data);
            setAir(airPollutionData);
            // console.log("Air Pollution:", airPollutionData);
          });
        axios
          .get(dailyForecastUrl(data.coord.lon, data.coord.lat))
          .then((response) => response.data)
          .then((dailyWeatherData) => {
            setDailyWeather(dailyWeatherData);
          });
      });
  };

  // React.useEffect(() => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWeatherData(data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  React.useEffect(() => {
    searchLocation();
  }, []);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  };

  function handleChange(event) {
    setLocation(event.target.value);
  }

  return (
    <div className="App">
      <div className="desktop_flex">
        <DesktopWeather weatherData={weatherData} />
        <WeatherCard
          location={location}
          keyDownHandler={keyDownHandler}
          handleChange={handleChange}
          searchLocation={searchLocation}
          weatherData={weatherData}
          air={air}
        />
      </div>
      <a id="weekly">
        <Weather dailyWeather={dailyWeather} />
      </a>
    </div>
  );
}
export default App;

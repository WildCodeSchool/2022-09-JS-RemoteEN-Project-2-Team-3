import React from "react";
import axios from "axios";
import SunMoon from "./components/SunMoon/SunMoon";
import WeatherCard from "./components/weather-card/weather-card";
import Weather from "./components/DailyWeather/Weather";
import DesktopWeather from "./components/DesktopWeather/desktop";
import HourlyWeather from "./components/DetailForecast/DetailForecast";
import Alert from "./components/Alert/Alert";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = React.useState();
  const [air, setAir] = React.useState();
  const [dailyWeather, setDailyWeather] = React.useState();
  const [hourlyWeather, setHourlyWeather] = React.useState();
  const [location, setLocation] = React.useState("London");
  const [alert, setAlert] = React.useState();

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const API_KEY_DAILY = import.meta.env.VITE_OPENWEATHER_DAILY_API_KEY;

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const airQualityUrl = (lon, lat) =>
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const dailyForecastUrl = (lon, lat) =>
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY_DAILY}`;

  const searchLocation = () => {
    setAlert(false);
    axios
      .get(currentWeatherUrl)
      .then((response) => response.data)
      .then((data) => {
        axios
          .get(airQualityUrl(data.coord.lon, data.coord.lat))
          .then((response) => response.data)
          .then((airPollutionData) => {
            setWeatherData(data);
            setAir(airPollutionData);
          });
        axios
          .get(dailyForecastUrl(data.coord.lon, data.coord.lat))
          .then((response) => response.data)
          .then((dailyWeatherData) => {
            setDailyWeather(dailyWeatherData);
            setHourlyWeather(dailyWeatherData.hourly);
          });
      })
      .catch((error) => {
        if (error.response) {
          // TODO: Please display a notification in UI
          setAlert(true);
        }
      });
  };

  React.useEffect(() => {
    searchLocation();
  }, []);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const onClickHandler = () => {
    searchLocation();
  };

  const onCloseHandler = () => {
    setAlert(false);
  };

  return (
    <div className="App">
      {alert ? <Alert onCloseHandler={onCloseHandler} /> : ""}
      <div className="desktop_flex">
        <DesktopWeather weatherData={weatherData} />
        <WeatherCard
          location={location}
          keyDownHandler={keyDownHandler}
          onClickHandler={onClickHandler}
          handleChange={handleChange}
          searchLocation={searchLocation}
          weatherData={weatherData}
          air={air}
        />
      </div>
      <div id="weekly" />
      <Weather dailyWeather={dailyWeather} />
      <div id="hourly" />
      <HourlyWeather hourWeatherData={hourlyWeather} />
      <div id="sun_moon" />
      <SunMoon dailyWeather={dailyWeather} />
    </div>
  );
}
export default App;

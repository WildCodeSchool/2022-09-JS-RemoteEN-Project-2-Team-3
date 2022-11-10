import React from "react";
import WeatherCard from "./components/weather-card/weather-card";
import "./App.css";
import Weather from "./components/Weather";
import HourlyWeather from "./components/DetailForecast/DetailForecast";
import "./components/Weather.css";

function App() {
  return (
    <div className="App">
      <WeatherCard />
      <h1>Today detail forecast</h1>
      <HourlyWeather />
      <h1>This week</h1>
      <Weather />
    </div>
  );
}
export default App;

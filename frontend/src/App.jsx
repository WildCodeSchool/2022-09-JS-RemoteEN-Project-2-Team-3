import React from "react";
import WeatherCard from "./components/weather-card/weather-card";
import "./App.css";
import Weather from "./components/DailyWeather/Weather";
import "./components/DailyWeather/Weather.css";
import DesktopWeather from "./components/DesktopWeather/desktop";

function App() {
  return (
    <div className="App">
      <div className="desktop_flex">
        <DesktopWeather />
        <WeatherCard />
      </div>
      <Weather />
    </div>
  );
}
export default App;

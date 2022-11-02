import React from "react";
import WeatherCard from "./components/weather-card/weather-card";
import "./App.css";
import Weather from "./components/Weather";
import "./components/Weather.css";

function App() {
  return (
    <div className="App">
      <WeatherCard />
      <Weather />
    </div>
  );
}
export default App;

import React, { useState, useEffect } from "react";
import DailyWeather from "./DailyWeather/DailyWeather";


function Weather() {
  const [weatherData, setWeatherData] = useState();

  const lon = 11.061859;
  const lat = 49.460983;
  const APIKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => console.error(err));
  }, []);
  // eslint-disable-next-line no-restricted-syntax
  if (weatherData) console.log(weatherData);
  return (
    <div className="weekly_forecast">
      {weatherData ? (
        weatherData.daily.slice(0, 7).map((day) => {
          return (
            <DailyWeather
              key={day.dt}
              dateNum={day.dt}
              dayIcon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              tempHigh={Math.round(day.temp.max)}
              tempLow={Math.round(day.temp.min)}
            />
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Weather;

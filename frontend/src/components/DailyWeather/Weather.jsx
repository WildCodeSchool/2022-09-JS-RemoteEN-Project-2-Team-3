// import React, { useState, useEffect } from "react";
import DailyWeather from "./DailyWeather";

function Weather({ dailyWeather }) {
  // const [weatherData, setWeatherData] = useState();

  // const lon = 11.061859;
  // const lat = 49.460983;
  // const APIKey = "ffe63745a1e6cbad92e44b2bf6f0ea6a";

  // useEffect(() => {
  //   const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWeatherData(data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // if (weatherData) console.log(weatherData);
  return (
    <div className="weekly_forecast">
      {dailyWeather != null ? (
        dailyWeather.daily.slice(0, 7).map((day) => {
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

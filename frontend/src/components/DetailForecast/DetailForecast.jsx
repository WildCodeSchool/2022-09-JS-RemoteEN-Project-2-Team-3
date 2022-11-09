import React, { useState, useEffect } from "react";
import "./DetailForecast.css";
import NW from "./icons/NWwind-icon.png";
import W from "./icons/Wwind-icon.png";
import S from "./icons/Swind-icon.png";
import E from "./icons/Ewind-icon.png";
import SW from "./icons/SWwind-icon.png";
import SE from "./icons/SEwind-icon.png";
import N from "./icons/Nwind-icon.png";
import NE from "./icons/NEwind-icon.png";

function DetailTodayWeather({
  hourNum,
  hourIcon,
  temp,
  tempFeels,
  hourHumidity,
  hourPop,
  hourPressure,
  hourWindSpeed,
  hourWindDegr,
}) {
  const hourNumForm = new Date(hourNum * 1000);
  const hour = hourNumForm.getHours();
  function windDirection(angle) {
    const directions = [N, NE, E, SE, S, SW, W, NW];
    return directions[Math.round(angle / 45) % 8];
  }
  return (
    <div className="forecast_body">
      <h2 className="hour_body">{`${hour}:00`}</h2>
      <h2 className="temp_body">{temp}°C</h2>
      <h2 className="tempFeels_body">{tempFeels}°C</h2>
      <img src={hourIcon} alt="icon" className="hourIcon_body" id="hour_icon" />
      <h2 className="humidity_body" id="humidity">
        {hourHumidity}%
      </h2>
      <h2 className="hourPop_body">{hourPop}%</h2>
      <img
        src={windDirection(hourWindDegr)}
        alt=""
        className="wind_body"
        id="wind_dir"
      />
      <h2 className="hourWindSpeed_body">{hourWindSpeed} km/h</h2>
      <h2 className="hourPressure_body">{hourPressure} hPa</h2>
    </div>
  );
}
function HourlyWeather() {
  const [hourWeatherData, setHourWeatherData] = useState();

  const lon = 11.061859;
  const lat = 49.460983;
  const APIKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setHourWeatherData(data.hourly);
      })
      .catch((err) => console.error(err));
  }, []);
  // eslint-disable-next-line no-restricted-syntax
  if (hourWeatherData) console.log(hourWeatherData);
  return (
    <div className="detail_forecast_container">
      <div className="detail_forecast_title">
        <h2 className="item_title">Hour</h2>
        <h2 className="item_title">Temperature/ Feels like</h2>
        <h2 className="item_title">Probability of precipitation</h2>
        <h2 className="item_title">Wind</h2>
        <h2 className="item_title">Atmospheric pressure</h2>
      </div>
      <div className="detail_forecast">
        {hourWeatherData ? (
          hourWeatherData
            .slice(0, 24)
            .map((hour) => {
              return (
                <DetailTodayWeather
                  key={hour.dt}
                  hourNum={hour.dt}
                  hourIcon={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                  temp={Math.round(hour.temp)}
                  tempFeels={Math.round(hour.feels_like)}
                  hourHumidity={Math.round(hour.humidity)}
                  hourPop={Math.round(hour.pop * 100)}
                  hourPressure={hour.pressure}
                  hourWindSpeed={Math.round(hour.wind_speed)}
                  hourWindDegr={hour.wind_deg}
                />
              );
            })
            .filter((e, i) => i % 3 === 0)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default HourlyWeather;

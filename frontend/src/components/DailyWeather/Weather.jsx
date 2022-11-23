import React from "react";
import "./Weather.css";
import DailyWeather from "./DailyWeather";

function Weather({ dailyWeather }) {
  const [isShown, setIsShown] = React.useState(true);
  return (
    <div>
      <div className="optional_detail">
        <h2>Weekly forecast</h2>
        <button
          type="button"
          onClick={() => setIsShown(!isShown)}
          id="mobile_title"
        >
          {isShown ? "    ❮ " : "... ❯ "}
        </button>
      </div>
      {isShown && (
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
                  pop={Math.round(day.pop)}
                />
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Weather;

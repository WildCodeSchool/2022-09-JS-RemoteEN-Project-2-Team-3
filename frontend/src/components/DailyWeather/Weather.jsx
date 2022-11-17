import "./Weather.css";
import DailyWeather from "./DailyWeather";

function Weather({ dailyWeather }) {
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
              pop={day.pop}
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

import React from "react";

function DailyWeather({ dateNum, dayIcon, tempHigh, tempLow, pop }) {
  let dateNumFormatted = new Date(dateNum * 1000);
  dateNumFormatted.getDay();
  const options = { weekday: "short" };
  dateNumFormatted = Intl.DateTimeFormat("en-US", options).format(
    dateNumFormatted
  );

  return (
    <div>
      <img src={dayIcon} alt="icon" />
      <h2>{dateNumFormatted}</h2>
      <h2>{tempHigh}°C</h2>
      <h2>{tempLow}°C</h2>
      <h2>Precipitation: {pop * 100}%</h2>
    </div>
  );
}

export default DailyWeather;

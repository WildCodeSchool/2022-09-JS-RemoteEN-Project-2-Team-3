import React from "react";

function DailyWeather({ dateNumInitial, dayIcon, tempHigh, tempLow }) {
  let dateNum = new Date(dateNumInitial * 1000);
  dateNum.getDay();
  const options = { weekday: "short" };
  dateNum = Intl.DateTimeFormat("en-US", options).format(dateNum);

  return (
    <div>
      <img src={dayIcon} alt="icon" />
      <h2>{dateNum}</h2>
      <h2>{tempHigh}°C</h2>
      <h2>{tempLow}°C</h2>
    </div>
  );
}

export default DailyWeather;

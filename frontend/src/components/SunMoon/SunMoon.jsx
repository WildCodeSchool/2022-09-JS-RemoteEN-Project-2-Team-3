import React from "react";

import "./SunMoon.css";
import sun from "./Icons/sun3.png";
import moon from "./Icons/moon3.png";

export default function SunMoon({ dailyWeather }) {
  function phaseMoon(number) {
    let phaseText = "";
    if (number === 0 || number === 1) {
      phaseText = "New moon";
    } else if (number >= 0.25 && number < 0.5) {
      phaseText = "First quarter moon";
    } else if (number >= 0.5 && number < 0.75) {
      phaseText = "Full moon";
    } else {
      phaseText = "Last quarter moon";
    }
    return phaseText;
  }
  return (
    <div className="sun_moon_main">
      <h1>Sun</h1>
      {dailyWeather && (
        <div className="sun">
          <div className="sun_icon">
            <img src={sun} alt="sun" />
          </div>
          <div className="info_sun">
            <div className="rise">
              <p>↑</p>
              <p>
                {new Date(
                  dailyWeather.daily[0].sunrise * 1000
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="down">
              <p>
                {new Date(
                  dailyWeather.daily[0].sunset * 1000
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>↓</p>
            </div>
          </div>
        </div>
      )}
      <h1>Moon</h1>
      {dailyWeather && (
        <div className="moon">
          <div className="moon_icon">
            <img src={moon} alt="moon" />
          </div>
          <div className="moon_phase">
            {dailyWeather && (
              <p>
                {phaseMoon(dailyWeather.daily[0].moon_phase)} (
                {dailyWeather.daily[0].moon_phase * 100}%)
              </p>
            )}
          </div>
          <div className="info_moon">
            <div className="rise">
              <p>↑</p>
              <p>
                {new Date(
                  dailyWeather.daily[0].moonrise * 1000
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="down">
              <p>
                {new Date(
                  dailyWeather.daily[0].moonset * 1000
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>↓</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

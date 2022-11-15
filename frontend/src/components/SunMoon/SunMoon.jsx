/* eslint-disable no-nested-ternary */
import React from "react";

import "./SunMoon.css";
import sun from "./Icons/sun3.png";
import moon from "./Icons/moon3.png";

export default function SunMoon({ dailyWeather }) {
  return (
    <div className="sun_moon_main">
      <div className="icons">
        <div className="sun">
          <img src={sun} alt="sun" />
        </div>
        <div className="moon">
          <img src={moon} alt="moon" />
          {dailyWeather && (
            <p>
              {dailyWeather.daily[0].moon_phase === 0
                ? "New moon"
                : dailyWeather.daily[0].moon_phase === 1
                ? "New moon"
                : dailyWeather.daily[0].moon_phase === 0.25
                ? "First quarter moon"
                : dailyWeather.daily[0].moon_phase === 0.5
                ? "Full moon"
                : "Last quarter moon"}
            </p>
          )}
        </div>
      </div>
      {dailyWeather && (
        <div className="info">
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

import React from "react";
import "./FunnyAdviceCard.css";
import happy from "./icons/happy.png";
import ohno from "./icons/ohno.png";
import calm from "./icons/calm.png";
import caution from "./icons/caution.png";
import overwhelmed from "./icons/overwhelmed.png";
import awkward from "./icons/awkward.png";
import bell from "./icons/bell.png";

function FunnyAdviceCard({ weatherData = {} }) {
  let adviceText = "";
  let adviceImg;

  const { main: { temp } = {} } = weatherData;

  if (temp >= 30) {
    adviceText = "Happiness is a day at the pool.";
    adviceImg = happy;
  } else if (temp < 30 && temp >= 15) {
    adviceText = "Life is short. Go to the beach!";
    adviceImg = calm;
  } else if (temp < 15 && temp >= 10) {
    adviceText = "Put on a flannel and get lost in the mountains!";
    adviceImg = awkward;
  } else if (temp < 10 && temp >= -5) {
    adviceText = "Grab your coffee and dress warm.";
    adviceImg = caution;
  } else if (temp < -5 && temp >= -20) {
    adviceText = "Hot chocolate is like a hug from the inside.";
  } else if (temp < -20 && temp > -35) {
    adviceText = "Nah. Just stay in bed instead!";
    adviceImg = overwhelmed;
  } else if (temp < -35) {
    adviceText = "Warn! Mother nature needs hot flash!";
    adviceImg = ohno;
  } else {
    adviceText = "It's a wonderful day";
    adviceImg = happy;
  }

  return (
    <div className="funny-advice">
      {weatherData && (
        <div className="funny-advice-card">
          <img className="advice-bell" src={bell} alt="advice-bell" />
          <p> {adviceText} </p>
          <img src={adviceImg} alt="advice-img" />
        </div>
      )}
    </div>
  );
}

export default FunnyAdviceCard;

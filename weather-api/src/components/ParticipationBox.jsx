import React from "react";

const ParticipationBox = ({ forecastData }) => {
  console.log(forecastData);
  const dayNamesArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let getDayNameFun = function () {
    let date = new Date(forecastData.date);
    date = date.getDay();
    return dayNamesArr[date];
  };

  return (
    <div className="forecast-box">
      <p className="forecast-day-name">{getDayNameFun()}</p>
      <img
        className="forecast-img"
        src={forecastData.day.condition.icon}
        alt=""
      />
      <p className="forecast-avg-temp">
        {forecastData.day.avgtemp_c.toFixed()}&deg;C
      </p>
    </div>
  );
};

export default ParticipationBox;
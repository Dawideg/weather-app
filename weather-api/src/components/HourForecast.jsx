import React, { useState } from "react";
import { nanoid } from "nanoid";
import HourForecastElement from "./HourForecastElement";

const HourForecast = ({ weatherData, isDay }) => {
  return (
    <div className="hour-forecast-div">
      {weatherData.forecast.forecastday[0].hour.map((el) => {
        if (
          new Date(el.time).getHours() > new Date().getHours() &&
          new Date(el.time).getHours() - new Date().getHours() < 5
        ) {
          return <HourForecastElement data={el} key={nanoid()} isDay={isDay} />;
        }
      })}
    </div>
  );
};

export default HourForecast;

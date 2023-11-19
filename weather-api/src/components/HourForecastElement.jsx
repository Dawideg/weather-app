import React from "react";

const HourForecastElement = ({ data, isDay }) => {
  return (
    <div
      className={`hour-forecast-el ${
        isDay ? " day-el-view" : " night-el-view"
      }`}
    >
      <p className="hour-forecast-time-p">
        {new Date(data.time).getHours()}:00
      </p>
      <img className="hour-forecast-img" src={data.condition.icon} alt="" />
      <p className="hour-forecast-temp">{data.temp_c}&deg;C</p>
      {/* <img
        src="https://cdn.weatherapi.com/weather/64x64/night/266.png"
        alt=""
      />
      <p>{data.chance_of_rain}%</p> */}
    </div>
  );
};

export default HourForecastElement;

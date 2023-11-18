import React from "react";

const BasicInfoBox = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading data ...</div>;
  }
  return (
    <div className="basic-box">
      <img
        className="location-icon"
        src={weatherData.current.condition.icon}
        alt=""
      />
      <ul className="sub-basic-box">
        <li className="location-today">Today</li>
        <li className="location-name">{weatherData.location.name}</li>
        <li className="location-temp">
          Temperature: {weatherData.current.temp_c}&deg;C
        </li>
        <li className="location-condition-text">
          {weatherData.current.condition.text}
        </li>
      </ul>
    </div>
  );
};

export default BasicInfoBox;

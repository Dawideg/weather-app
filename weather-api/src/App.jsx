import React, { useEffect, useState } from "react";
import axios from "axios";
import BasicInfoBox from "./components/BasicInfoBox";
import ParticipationBox from "./components/ParticipationBox";
import { nanoid } from "nanoid";

const App = () => {
  const [weatherData, setWeatherData] = useState("");
  const [forecastData, seForecastData] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/forecast.json?key=5c0eee76dcf4445c8a8144101231611&q=mexico&days=5&aqi=no&alerts=no"
      )
      .then((res) => {
        setWeatherData(res.data);
      });
  }, []);
  if (weatherData) {
    return (
      <>
        <BasicInfoBox weatherData={weatherData} />
        <div className="forecast-all-box">
          {weatherData.forecast.forecastday.map((el) => {
            return <ParticipationBox forecastData={el} key={nanoid()} />;
          })}
        </div>
      </>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default App;

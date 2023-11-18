import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import BasicInfoBox from "./components/BasicInfoBox";
import ParticipationBox from "./components/ParticipationBox";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [weatherData, setWeatherData] = useState("");
  const [phrase, setPhrase] = useState("rzeszow");

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=5c0eee76dcf4445c8a8144101231611&q=${phrase}&days=5&aqi=no&alerts=no`
      )
      .then((res) => {
        setWeatherData(res.data);
      });
  }, [phrase]);
  if (weatherData) {
    return (
      <>
        <SearchBar setPhrase={setPhrase} />
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

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import BasicInfoBox from "./components/BasicInfoBox";
import ParticipationBox from "./components/ParticipationBox";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";
import HourForecast from "./components/HourForecast";
import changeBackgrounds from "./components/functions/changeBackgrounds";

const App = () => {
  const [weatherData, setWeatherData] = useState("");
  const [phrase, setPhrase] = useState("rzeszow");
  const [isDay, setIsDay] = useState(() => {});

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=5c0eee76dcf4445c8a8144101231611&q=${phrase}&days=5&aqi=no&alerts=no`
      )
      .then((res) => {
        setWeatherData(res.data);
        setIsDay();
      });
  }, [phrase]);

  useEffect(() => {
    setIsDay(() => {
      if (weatherData) {
        console.log(weatherData);
        if (
          new Date(weatherData.location.localtime).getHours() > 5 &&
          new Date(weatherData.location.localtime).getHours() < 22
        ) {
          return true;
        } else {
          return false;
        }
      }
    });
  }, [weatherData]);
  if (weatherData) {
    changeBackgrounds(weatherData, isDay);
    return (
      <div>
        <SearchBar setPhrase={setPhrase} />
        <BasicInfoBox weatherData={weatherData} isDay={isDay} />
        <div className="forecast-all-box">
          {weatherData.forecast.forecastday.map((el) => {
            return (
              <ParticipationBox
                forecastData={el}
                key={nanoid()}
                isDay={isDay}
              />
            );
          })}
        </div>
        <HourForecast weatherData={weatherData} isDay={isDay} />
      </div>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default App;

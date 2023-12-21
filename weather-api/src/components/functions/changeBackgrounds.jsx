import React from "react";

const changeBackgrounds = (weatherData, isDay) => {
  let conditionTxt = weatherData.current.condition.text.toLowerCase();
  document.body.className = "";
  if (isDay) {
    if (
      conditionTxt.includes("cloud") ||
      conditionTxt.includes("overcast") ||
      conditionTxt.includes("fog") ||
      conditionTxt.includes("showers")
    ) {
      document.body.classList.add("body-bg1");
    } else if (conditionTxt.includes("sun")) {
      document.body.classList.add("body-bg2");
    } else if (conditionTxt.includes("clear")) {
      document.body.classList.add("body-bg3");
    }
    if (conditionTxt.includes("rain") || conditionTxt.includes("snow")) {
      document.body.classList.add("body-bg4");
    }
  } else {
    if (
      conditionTxt.includes("cloud") ||
      conditionTxt.includes("rain") ||
      conditionTxt.includes("showers") ||
      conditionTxt.includes("overcast")
    ) {
      document.body.classList.add("body-bg4");
    }
    if (conditionTxt.includes("clear")) {
      document.body.classList.add("body-bg5");
    }
  }
};

export default changeBackgrounds;

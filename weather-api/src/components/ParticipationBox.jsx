import React, { useState } from "react";
import { motion } from "framer-motion";

const ParticipationBox = ({ forecastData, isDay, setModal, setModalData }) => {
  const [hoverAnim, setHoverAnim] = useState(false);
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
    <>
      <motion.div
        animate={{ scale: hoverAnim ? 1.2 : 1 }}
        onMouseEnter={() => setHoverAnim(true)}
        onMouseLeave={() => setHoverAnim(false)}
        onClick={() => {
          setModal(true);
          setModalData(forecastData);
        }}
        className={`forecast-box ${isDay ? " day-el-view" : " night-el-view"}`}
      >
        <p className="forecast-day-name">{getDayNameFun()}</p>
        <img
          className="forecast-img"
          src={forecastData.day.condition.icon}
          alt=""
        />
        <p className="forecast-avg-temp">
          {forecastData.day.avgtemp_c.toFixed()}&deg;C
        </p>
      </motion.div>
    </>
  );
};

export default ParticipationBox;

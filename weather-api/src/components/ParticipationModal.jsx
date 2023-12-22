import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";

import { animate, motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Chart,
} from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const ParticipationModal = ({ modal, setModal, forecastData }) => {
  const [closeModal, setCloseModal] = useState(false);

  const [chartData, setChartData] = useState(() => {
    return {
      labels: forecastData.hour.map((e) => {
        let hour = new Date(e.time).getHours().toString();
        return [hour.toString()];
      }),

      datasets: [
        {
          id: 1,
          label: "",
          data: forecastData.hour.map((e) => {
            return e.temp_c;
          }),
          tension: 0.3,
        },
      ],
    };
  });

  const dayNamesArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [weekday, setWeekday] = useState(() => {
    let date = new Date(forecastData.date).getDay();
    if (date == new Date().getDay()) {
      return "Today";
    } else if (date == new Date().getDay() + 1) {
      return "Tomorow";
    } else {
      return dayNamesArr[date];
    }
  });

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        min: 5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="modal-div"
        animate={{ scale: closeModal ? 0 : 1 }}
        initial={{ scale: 0 }}
      >
        <AiOutlineClose
          size={30}
          onClick={() => {
            setModal(false);
          }}
          className="close-modal-btn"
        />

        <div className="modal-info-div">
          <h1 className="modal-h1">{weekday}</h1>
          <p className="modal-condition">{forecastData.day.condition.text}</p>
          <img className="modal-img" src={forecastData.day.condition.icon} />
          <div className="modal-min-max-div">
            <p>
              <FaTemperatureArrowDown />
              {forecastData.day.mintemp_c}&deg;C
            </p>
            <p>
              <FaTemperatureArrowUp />
              {forecastData.day.maxtemp_c}&deg;C
            </p>
          </div>
          <div className="modal-cor-div">
            <p className="modal-cor-1">Chance of rain:</p>
            <p className="modal-cor-2">
              {forecastData.day.daily_chance_of_rain}%
            </p>
          </div>
        </div>

        <div className="chartDiv">
          <Line datasetIdKey="id" data={chartData} />
        </div>
      </motion.div>

      <motion.div
        onClick={() => setModal(false)}
        className="modal-div-bg"
      ></motion.div>
    </>
  );
};
export default ParticipationModal;

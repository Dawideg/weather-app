import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { animate, motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Chart,
} from "chart.js";

const ParticipationModal = ({ modal, setModal, forecastData }) => {
  const [closeModal, setCloseModal] = useState(false);
  const [chartElId, setChartElId] = useState(0);
  const [chartData, setChartData] = useState(() => {
    return {
      labels: [
        forecastData.hour.map((e) => {
          return e.time;
        }),
      ],
      datasets: [
        {
          id: 1,
          label: "",
          data: [
            forecastData.hour.map((e) => {
              return e.temp_c;
            }),
          ],
        },
      ],
    };
  });
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(PointElement);
  Chart.register(LineElement);
  console.log(chartData);

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
            setCloseModal(true);
            setModal(false);
          }}
          className="close-modal-btn"
        />
        <Line datasetIdKey="id" data={chartData} />
      </motion.div>
      <motion.div className="modal-div-bg">a</motion.div>
    </>
  );
};
export default ParticipationModal;

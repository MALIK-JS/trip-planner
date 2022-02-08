import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { dataContext } from "../pages/Dashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart for you expenses for each trip",
    },
  },
};

function Chart() {

  const allInputs = useContext(dataContext)
  const lastInput = allInputs.at(-1);
  console.log('malik',allInputs.map((country) => country.to))
  const labels = allInputs.map((country) => country.to);
  const data = {
    labels,
    datasets: [
      {
        label: "Expenses by country",
        data: allInputs.map((country) => country.budget),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="charts">
      <div className="charts__left">
        <div className="charts__left__title">
          <div>
            <h1>Report of expenses by Trip</h1>
            <p>{`Get ready! Your next trip will be to ${lastInput.to} from ${lastInput.from}`}</p>
          </div>
          <i className="fa fa-usd" aria-hidden="true"></i>
        </div>
        <div id="apex1">
          <Bar options={options} data={data} />;
        </div>
      </div>
    </div>
  );
}

export default Chart;

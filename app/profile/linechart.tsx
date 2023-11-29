"use client";
import { LineController } from 'chart.js';
// import React from "react";
// import Chart from "chart.js";

// export default function CardLineChart() {
//   React.useEffect(() => {
//     var config = {
//       type: "line",
//       data: {
//         labels: [
//           "January",
//           "February",
//           "March",
//           "April",
//           "May",
//           "June",
//           "July",
//         ],
//         datasets: [
//           {
//             label: new Date().getFullYear(),
//             backgroundColor: "#3182ce",
//             borderColor: "#3182ce",
//             data: [65, 78, 66, 44, 56, 67, 75],
//             fill: false,
//             barPercentage: 0.5,
//           },
//           {
//             label: new Date().getFullYear() - 1,
//             fill: false,
//             backgroundColor: "#edf2f7",
//             borderColor: "#edf2f7",
//             data: [40, 68, 86, 74, 56, 60, 87],
//             barPercentage: 0.7,
//           },
//         ],
//       },
//       options: {
//         maintainAspectRatio: false,
//         responsive: true,
//         elements: {
//           line: {
//             tension: 0,
//           },
//         },
//         plugins: {
//           legend: {
//             position: "bottom",
//           },
//         },
//         title: {
//           display: false,
//           text: "Sales Charts",
//           fontColor: "white",
//         },
//         legend: {
//           labels: {
//             fontColor: "white",
//           },
//           align: "end",
//           position: "bottom",
//         },
//         tooltips: {
//           mode: "index",
//           intersect: true,
//         },
//         hover: {
//           mode: "nearest",
//           intersect: true,
//         },
//         scales: {
//           xAxes: [
//             {
//               ticks: {
//                 fontColor: "rgba(255,255,255,.7)",
//               },
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Month",
//                 fontColor: "white",
//               },
//               gridLines: {
//                 display: false,
//                 borderDash: [2],
//                 borderDashOffset: [2],
//                 color: "rgba(33, 37, 41, 0.3)",
//                 zeroLineColor: "rgba(0, 0, 0, 0)",
//                 zeroLineBorderDash: [2],
//                 zeroLineBorderDashOffset: [2],
//               },
//             },
//           ],
//           yAxes: [
//             {
//               ticks: {
//                 fontColor: "rgba(255,255,255,.7)",
//               },
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Value",
//                 fontColor: "white",
//               },
//               gridLines: {
//                 borderDash: [3],
//                 borderDashOffset: [3],
//                 drawBorder: false,
//                 color: "rgba(255, 255, 255, 0.15)",
//                 zeroLineColor: "rgba(33, 37, 41, 0)",
//                 zeroLineBorderDash: [2],
//                 zeroLineBorderDashOffset: [2],
//               },
//             },
//           ],
//         },
//       },
//     };
//     var ctx = document.getElementById("line-chart").getContext("2d");
//     window.myLine = new Chart(ctx, config);
//   }, []);
//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
//         <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full max-w-full flex-grow flex-1">
//               <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
//                 Overview
//               </h6>
//               <h2 className="text-white text-xl font-semibold">Sales value</h2>
//             </div>
//           </div>
//         </div>
//         <div className="p-4 flex-auto">
//           {/* Chart */}
//           <div className="relative h-350-px">
//             <canvas id="line-chart"></canvas>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// import { useEffect, useRef } from "react";
// import { Chart } from "chart.js";
// import React from "react";

// function Example() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     var ctx = canvasRef.current?.getContext("2d"); // document.getElementById("myChart").getContext("2d");
//     var myChart = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: [
//           "Sunday",
//           "Monday",
//           "Tuesday",
//           "Wednesday",
//           "Thursday",
//           "Friday",
//           "Saturday",
//         ],
//         datasets: [
//           {
//             data: [86, 114, 106, 106, 107, 111, 133],
//             borderColor: "#3e95cd",
//             backgroundColor: "#7bb6dd",
//             fill: false,
//             borderWidth: 2,
//             tension: 0,
//           },
//           {
//             data: [70, 90, 44, 60, 83, 90, 100],
//             label: [],
//             borderColor: [],
//             backgroundColor: "#71d1bd",
//             fill: false,
//             borderWidth: 2,
//             tension: 0,
//           },
//           {
//             data: [10, 21, 60, 44, 17, 21, 17],
//             label: "Pending",
//             borderColor: "#ffa500",
//             backgroundColor: "#ffc04d",
//             fill: false,
//             borderWidth: 1,
//             tension: 0,
//           },
//         ],
//       },
//       options: {
//         responsive: false,
//         plugins: {
//           legend: {
//             display: false,
//           },
//           tooltips: {
//             enabled: false,
//           },
//         },
//       },
//     });
//   }, [canvasRef]);

//   return (
//     <>
//       <div className="w-[1100px] h-screen flex mx-auto my-auto">
//         <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
//           <canvas ref={canvasRef} id="myChart"></canvas>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Example;
import React from 'react';
// import { Line } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJs.register(CategoryScale, LineElement, LinearScale, PointElement);


const LineChart = () => {
  

  // داده‌های چارت
  const data = {
    labels: ['دوره 1', 'دوره 2', 'دوره 3', 'دوره 4', 'دوره 5'],
    datasets: [
      {
        label: 'عملکرد',
        borderColor: 'rgb(75, 192, 192)',
        data: [12, 19, 3, 5, 2],
      },
    ],
  };

  // تنظیمات چارت
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
{/* <Doughnut data={data} /> */}

    </div>
  );
};

export default LineChart;

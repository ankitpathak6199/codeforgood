import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2';
import numeral from "numeral";

function Chartsyntax({ x, y, labels }) {
  const [data, setdata] = useState(["ankit"]);
  return (
    <div className="linegraph">
      {data?.length > 0 && (
        <Pie data={{
          labels: x,
          datasets: [
            {
              label: 'Student Data Analysis',
              fill: false,
              lineTension: 0.1,
              backgroundColor: [
                "#d96f66",
                "#F5DEB3",
                "rgba(75,192,192,1)",
                "#A76152",
                "#1F2766",
                "#1F6643",
              ],
              borderColor: "#f2e4dc",
              borderCapStyle: 'butt',
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              data: y
            }
          ]
        }}
          options={{
            plugins: {
              title: {
                display: true,
                text: labels,
              },
              legend: {
                display: true,
              },
            },

            elements: {
              point: {
                radius: 0,
              },
            },
            maintainAspectRatio: false,
            tooltips: {
              mode: "index",
              intersect: false,
              callbacks: {
                label: function (tooltipItem, data) {
                  return numeral(tooltipItem.value).format("+0,0");
                },
              },
            },
            scales: {
            },
          }} />
      )}

    </div>
  )
}




export default Chartsyntax;


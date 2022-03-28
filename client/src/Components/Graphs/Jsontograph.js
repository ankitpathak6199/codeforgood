import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2';
import numeral from "numeral";

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Data Analysis',
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
    //   xAxes: [
    //     {
    //       type: "time",
    //       time: {
    //         format: "MM/DD/YY",
    //         tooltipFormat: "ll",
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       gridLines: {
    //         display: true,
    //       },
    //       ticks: {
    //         // Include a dollar sign in the ticks
    //         callback: function (value, index, values) {
    //           return numeral(value).format("0a");
    //         },
    //       },
    //     },
    //   ],
  },
};

function Jsontograph() {
  const [data, setdata] = useState([{
    x: "RP",
    y: 5,
  }, {
    x: "HP",
    y: 3,
  },
  {
    x: "VP",
    y: 5,
  }]

  )



  // useEffect(()=>{
  //     fetch("some api u will tell me to fetch")
  //     .then(response => response.json())
  //     .then(data=>{
  //         setdata(buildgraphs(data,casestype));


  //     })

  // },[])


  return (

    <div className="linegraph">
      {data?.length > 0 && (
        <Pie data={{
          labels: ['Hyg Run', 'St & Sl', 'Unjumb', "RA"],
          datasets: [
            {
              label: 'Current lag',
              fill: false,
              lineTension: 0.1,
              backgroundColor: [
                "#F5DEB3",
                "rgba(75,192,192,1)",
                "#A76152",
                "#1F2766",
                "#1F6643",
              ],
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              data: [5, 3, 6, 3]
            }
          ]
        }}
          options={options} />
      )}

    </div>
  )
}




export default Jsontograph

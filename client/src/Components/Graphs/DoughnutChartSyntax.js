import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import numeral from "numeral";
const options = {
  plugins: {
    title: {
      display: true,
      text: 'Student Data Analysis',
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

function Chartsyntax({ x, y }) {
  const [data, setdata] = useState(["ankit"]);
  //     const [xdata,setxdata] = useState([]);
  //     const [ydatacount,setydata] = useState([]);
  //     const [ydatawincount,setydatawin] = useState([]);
  //     const [ydatalosecount,setlose] = useState([]);
  //     const [ydatatotascore,settota] = useState([]);




  //   useEffect(()=>{
  //       axios.post("/routes",{
  //           email : "",
  //           password : ""
  //       }).then((data)=>{
  //           console.log(data);
  //           setxdata(data.data.x);
  //           console.log(data.data.x);
  //           console.log(data.data.y);
  //           setydata(data.data.y.count);
  //           setydatawin(data.data.y.wincoun);
  //           setlose(data.data.y.losecoun);
  //           settota(data.data.y.totascor);


  //       })

  //   },[])


  return (

    <div className="linegraph">
      {data?.length > 0 && (
        <Doughnut data={{
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
          options={options} />
      )}

    </div>
  )
}




export default Chartsyntax;


import React, { useState, useEffect } from 'react'
import { Pie,Bar } from 'react-chartjs-2';
import numeral from "numeral";
import axios from 'axios';
import Chartsyntax from './Chartsyntax';
import BarChartsyntax from './BarChartSyntax';
import DoughnutChartSyntax from './DoughnutChartSyntax';
import LineChartsyntax from './LineChartSyntax';


function GamesChart({charttype}) {
    const [data,setdata] = useState(["ankit"]);
    const [xdata,setxdata] = useState([]);
    const [ydata,setydata] = useState([]);
    // const [ydatawincount,setydatawin] = useState([]);
    // const [ydatalosecount,setlose] = useState([]);
    // const [ydatatotascore,settota] = useState([]);
  



  useEffect(()=>{
      axios.post("/sendgames",{
          email : "",
          password : ""
      }).then((data)=>{
          console.log(data);
          setxdata(data.data.x);
          console.log(data.data.x);
          console.log(data.data.y);
          setydata(data.data.y);
        //   setydatawin(data.data.y.wincoun);
        //   setlose(data.data.y.losecoun);
        //   settota(data.data.y.totascor);


      })

  },[])


  return (

    <div className="linegraph">
      {data?.length > 0 && (
          <div>
          {charttype == "Pie" && <Chartsyntax x = {xdata} y = {ydata}/>}
        { charttype == "Bar" && <BarChartsyntax x = {xdata} y = {ydata}/>}
        { charttype == "Dough" && <DoughnutChartSyntax x = {xdata} y = {ydata} />}
        {charttype == "Line" && <LineChartsyntax x = {xdata} y = {ydata} />}
          {/* <Chartsyntax x = {xdata} y = {ydata}/> */}
          {/* <Chartsyntax x = {xdata} y = {ydatalosecount}/>
           <Chartsyntax x = {xdata} y = {ydatawincount}/>
            <Chartsyntax x = {xdata} y = {ydatatotascore}/> */}
          </div>
        // <Pie data={{
        //   labels: xdata,
        //   datasets: [
        //     {
        //       label: 'Current lag',
        //       fill: false,
        //       lineTension: 0.1,
        //       backgroundColor: [
        //         "#F5DEB3",
        //         "rgba(75,192,192,1)",
        //         "#A76152",
        //         "#1F2766",
        //         "#1F6643",
        //       ],
        //       borderColor: "rgba(75,192,192,1)",
        //       borderCapStyle: 'butt',
        //       borderDashOffset: 0.0,
        //       borderJoinStyle: 'miter',
        //       data: ydatacount
        //     }
        //   ]
        // }}
        //   options={options} />
      )}

    </div>
  )
}




export default GamesChart;
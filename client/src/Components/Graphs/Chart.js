import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2';
import numeral from "numeral";
import axios from 'axios';
import Chartsyntax from './Chartsyntax';
import BarChartsyntax from './BarChartSyntax';
import DoughnutChartSyntax from './DoughnutChartSyntax';
import LineChartsyntax from './LineChartSyntax';
import GamesChart from './GamesChart';


function Chart({ charttype }) {
  const [data, setdata] = useState(["ankit"]);
  const [xdata, setxdata] = useState([]);
  const [ydatacount, setydata] = useState([]);
  const [ydatawincount, setydatawin] = useState([]);
  const [ydatalosecount, setlose] = useState([]);
  const [ydatatotascore, settota] = useState([]);




  useEffect(() => {
    axios.post("/routes", {
      email: "",
      password: ""
    }).then((data) => {
      console.log(data);
      setxdata(data.data.x);
      console.log(data.data.x);
      console.log(data.data.y);
      setydata(data.data.y.count);
      setydatawin(data.data.y.wincoun);
      setlose(data.data.y.losecoun);
      settota(data.data.y.totascor);


    })

  }, [])


  return (

    <div className="linegraph">
      {data?.length > 0 && (
        <div>
          {charttype == "Pie" && <Chartsyntax x={xdata} y={ydatacount} labels="Count"/>}
          {charttype == "Bar" && <BarChartsyntax x={xdata} y={ydatacount} labels="Count" />}
          {charttype == "Dough" && <DoughnutChartSyntax x={xdata} y={ydatacount} labels="Count"/>}
          {charttype == "Line" && <LineChartsyntax x={xdata} y={ydatacount} labels="Count" />}
          {charttype == "Pie" && <Chartsyntax x={xdata} y={ydatalosecount} labels="Hints"/>}
          {charttype == "Bar" && <BarChartsyntax x={xdata} y={ydatalosecount} labels="Hints"/>}
          {charttype == "Dough" && <DoughnutChartSyntax x={xdata} y={ydatalosecount} labels="Hints"/>}
          {charttype == "Line" && <LineChartsyntax x={xdata} y={ydatalosecount} labels="Hints"/>}
          {charttype == "Pie" && <Chartsyntax x={xdata} y={ydatawincount} labels="Wins"/>}
          {charttype == "Bar" && <BarChartsyntax x={xdata} y={ydatawincount} labels="Wins" />}
          {charttype == "Dough" && <DoughnutChartSyntax x={xdata} y={ydatawincount} labels="Wins"/>}
          {charttype == "Line" && <LineChartsyntax x={xdata} y={ydatawincount} labels="Wins"/>}
          {charttype == "Pie" && <Chartsyntax x={xdata} y={ydatatotascore} labels="Time taken for each question"/>}
          {charttype == "Bar" && <BarChartsyntax x={xdata} y={ydatatotascore} labels="Time taken for each question"/>}
          {charttype == "Dough" && <DoughnutChartSyntax x={xdata} y={ydatatotascore} labels="Time taken for each question"/>}
          {charttype == "Line" && <LineChartsyntax x={xdata} y={ydatatotascore} labels="Time taken for each question"/>}
          {/* <Chartsyntax x = {xdata} y = />
        <Chartsyntax x = {xdata} y = />
        <Chartsyntax x = {xdata} y = /> */}
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




export default Chart;

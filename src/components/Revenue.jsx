import React, { useRef, useEffect, useState } from 'react';
import PieChart from './PieChartFunctional.jsx';
import Percentages from './Percentages.jsx';
import '../css/Percentages.css';
import '../css/App.css';

function Revenue(props) {
  let revenueData = [ 
    { name: "Medical Center", value: 45, color: "#F0BF00" }, 
    { name: "Student Fees", value: 4, color: "#F6E50E" }, 
    { name: "State of California", value: 8, color: "#FFF688" }, 
    { name: "Tuition", value: 11, color: "#5F63EC"}, 
    { name: "Research Grants and Contracts", value: 13, color: "#71A8FF"}, 
    { name: "Pell Grants", value: 1, color: "cyan" }, 
    { name: "Non-educational Services", value: 11, color: "#0F7AB4" }, 
    { name: "Gifts, Endowments, Interest, Etc.", value: 7, color: "#D4E4FF" } ]

  return (
    <div id="revenue-data">
      <p className="chart-title" id="rev-results">RESULTS</p>
      <p className="chart-title" id="rev-title">UC Davis Revenues</p>

      <p className="chart-title" id="rev-guess">Your Revenue Guess</p>
      <PieChart data={props.data} name="rev"/>

      <p className="chart-title" id="rev-actual">Actual Revenue</p>
      <PieChart data={revenueData} name="actual-rev"/>

      <Percentages data={props.data} name="rev" callback={props.callback}/>
    </div>
  )
}

export default Revenue;


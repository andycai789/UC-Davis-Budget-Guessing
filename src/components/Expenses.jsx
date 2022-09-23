import React, { useRef, useEffect, useState } from 'react';
import PieChart from './PieChartFunctional.jsx';
import Percentages from './Percentages.jsx';
import '../css/Percentages.css';
import '../css/App.css';

function Expenses(props) {
  let expenditureData = [ 
    { name: "Medical Center", value: 43, color: "#F0BF00" }, 
    { name: "Teaching and Teaching Support", value: 23, color: "#F6E50E" }, 
    { name: "Research", value: 11, color: "#FFF688" }, 
    { name: "Student Services and Financial Aid", value: 8, color: "#5F63EC" }, 
    { name: "Operations and Maintenance (Buildings, etc)", value: 2, color: "#71A8FF" }, 
    { name: "Administration", value: 3, color: "cyan" }, 
    { name: "Non-Educational Services", value: 2, color: "#0F7AB4" }, 
    { name: "Public Service", value: 2, color: "#D4E4FF" }, 
    { name: "Depreciation, Interest, etc.", value: 6, color: "#E3A400"}]

  return (
    <div id="expenses-data">
      <p className="chart-title" id="exp-results">RESULTS</p>
      <p className="chart-title" id="exp-title">UC Davis Expenditures</p>

      <p className="chart-title" id="exp-guess">Your Expenses Guess</p>
      <PieChart data={props.data} name={"exp"} />

      <p className="chart-title" id="exp-actual">Actual Expenses</p>
      <PieChart data={expenditureData} name={"actual-exp"} />
      
      <Percentages data={props.data} name="exp" callback={props.callback}/>
    </div>
  )
}

export default Expenses;
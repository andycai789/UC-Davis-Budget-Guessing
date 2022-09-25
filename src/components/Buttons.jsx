import React from 'react';
import '../css/Buttons.css';

let filled = "#71A8FF";
let unfilled = "#7F8187";

function RevenueNext() {
  document.getElementById("expenses")
          .style.color = filled;
  document.getElementById("circ2")
          .style.fill = filled;
  document.getElementById("line1")
          .style.stroke = filled;
  document.getElementById("next-button1")
          .style.display = "none";
  document.getElementById("comp-button")
          .style.display = "inline";
  document.getElementById("prev-button")
          .style.display = "inline";

  document.getElementById("revenue-data")
          .style.display = "none";
  document.getElementById("expenses-data")
          .style.display = "inline";

  console.log("Pressed RevenueNext");
}

function ExpenseCompare() {
  document.getElementById("compare")
          .style.color = filled;
  document.getElementById("circ3")
          .style.fill = filled;
  document.getElementById("line2")
          .style.stroke = filled;
  document.getElementById("comp-button")
          .style.display = "none";
  document.getElementById("prev-button")
          .style.display = "none";
  document.getElementById("next-button2")
          .style.display = "inline";

  document.getElementById("expenses-data")
          .style.display = "none";
  document.getElementById("revenue-data")
          .style.display = "inline";
  document.getElementById("actual-rev-pie-chart")
          .style.display = "block";

  document.getElementById("rev-title")
          .style.display = "none";
  document.getElementById("rev-results")
          .style.display = "block";
  document.getElementById("rev-guess")
          .style.display = "block";
  document.getElementById("rev-actual")
          .style.display = "block";

  document.getElementById("rev-percents")
          .style.display = "none";
  document.getElementById("exp-percents")
          .style.display = "none";

  console.log("Pressed ExpenseCompare");
}

function ExpensePrevious() {
  document.getElementById("expenses")
          .style.color = "white";
  document.getElementById("circ2")
          .style.fill = unfilled;
  document.getElementById("line1")
          .style.stroke = unfilled;
  document.getElementById("comp-button")
          .style.display = "none";
  document.getElementById("prev-button")
          .style.display = "none";
  document.getElementById("next-button1")
          .style.display = "inline";

  document.getElementById("revenue-data")
          .style.display = "inline";
  document.getElementById("expenses-data")
          .style.display = "none";

  console.log("Pressed ExpensePrevious");
}

function CompareNext() {

  document.getElementById("next-button2")
          .style.display = "none";
  document.getElementById("restart-button")
          .style.display = "inline";

  document.getElementById("revenue-data")
          .style.display = "none";
  document.getElementById("actual-rev-pie-chart")
          .style.display = "none";
  document.getElementById("expenses-data")
          .style.display = "inline";
  document.getElementById("actual-exp-pie-chart")
          .style.display = "block";
  
  document.getElementById("exp-title")
          .style.display = "none";
  document.getElementById("exp-results")
          .style.display = "block";
  document.getElementById("exp-guess")
          .style.display = "block";
  document.getElementById("exp-actual")
          .style.display = "block";

  console.log("Pressed CompareNext");
}

function CompareRestart() {
  document.getElementById("expenses")
          .style.color = "white";
  document.getElementById("compare")
          .style.color = "white";
  document.getElementById("line1")
          .style.stroke = unfilled;
  document.getElementById("line2")
          .style.stroke = unfilled;
  document.getElementById("circ2")
          .style.fill = unfilled;
  document.getElementById("circ3")
          .style.fill = unfilled;
  document.getElementById("restart-button")
          .style.display = "none";
  document.getElementById("next-button1")
          .style.display = "inline";

  document.getElementById("expenses-data")
          .style.display = "none";
  document.getElementById("actual-exp-pie-chart")
          .style.display = "none";
  document.getElementById("revenue-data")
          .style.display = "inline";   

  document.getElementById("rev-title")
          .style.display = "block";
  document.getElementById("rev-results")
          .style.display = "none";
  document.getElementById("rev-guess")
          .style.display = "none";
  document.getElementById("rev-actual")
          .style.display = "none";

  document.getElementById("exp-title")
          .style.display = "block";
  document.getElementById("exp-results")
          .style.display = "none";
  document.getElementById("exp-guess")
          .style.display = "none";
  document.getElementById("exp-actual")
          .style.display = "none";

  document.getElementById("rev-percents")
          .style.display = "block";
  document.getElementById("exp-percents")
          .style.display = "block";

  console.log("Pressed CompareRestart");
}

function Buttons() {
  return (
    <div id="all-buttons">
      <button id="next-button1" onClick={RevenueNext}> 
        Next 
      </button>
      <button id="comp-button" onClick={ExpenseCompare}>    
        Compare 
      </button>
      <button id="prev-button" onClick={ExpensePrevious}> 
        Previous 
      </button>
      <button id="next-button2" onClick={CompareNext}> 
        Next 
      </button>
      <button id="restart-button" onClick={CompareRestart}>   
        Restart 
      </button>
    </div>
  )
}

export default Buttons;
import React from 'react';
import '../css/Prog.css';

function ProgBar() {
  let filled = "#71A8FF";
  let unfilled = "#7F8187";

  return (
    <svg>
      <line id="line1" x1="20" y1="20" x2="150" y2="20" stroke={unfilled} strokeWidth="5"/>

      <line id="line2" x1="150" y1="20" x2="280" y2="20" stroke={unfilled} strokeWidth="5"/>

      <circle id="circ1" cx="20" cy="20" r="10" fill={filled}/>

      <circle id="circ2" cx="150" cy="20" r="10" fill={unfilled}/>

      <circle id="circ3" cx="280" cy="20" r="10" fill={unfilled}/>
    </svg>
  )
}

function Prog() {

  return (
    <div id="prog">
      <p id="prog-title">Slice the Pie</p>

      <p className="prog-intro">
      Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.
      </p>

      <p className="prog-intro">
      You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.
      </p>

      <div id="prog-labels">
        <p id="revenue">REVENUE</p>
        <p id="expenses">EXPENSES</p>
        <p id="compare">COMPARE</p>
      </div>

      <div id="prog-bar">
        <ProgBar/>
      </div>

    </div>
  )
}

export default Prog;
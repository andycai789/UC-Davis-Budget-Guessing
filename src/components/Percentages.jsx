import React from 'react';
import '../css/Percentages.css';

function CreateEntry(props) {
  let data = props.data.slice();
  let itemElems = [];
  let callback = props.callback;

  for (let i = 0; i < data.length; i++) {
    itemElems.push(
      <div className="percent-container">
        <div className="percent-entry">
          <div className="percent-color-label">
            <div>
              <svg width="20px" height="20px">
                <circle cx="10" cy="12" r="8" fill={data[i].color}/>
              </svg>
            </div>
            <div className="percent-text"> {data[i].name}</div>
          </div>

          <input className="user-input" id={props.name + "-input" +i.toString()} type="number" min="0" max="100" onChange={function() {
            let percentId = props.name + "-input" + i.toString();
            let percentInput = document.getElementById(percentId)
            data[i].value = parseInt(percentInput.value);

            let total = findTotal(data);

            if (total > 100) {
              let remainder = (100 - (total - data[i].value))
              percentInput.value = remainder;
              data[i].value = remainder;
            }

            callback(data);
          }}/>
        </div>
      </div>
    )
  }
  return (
    <div> {itemElems} </div>
  ) 
}

function findTotal(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].value;
  }
  return total;
}

function Percentages(props) {
  return (
    <div id={props.name + "-percents"}>
      <div className="percent-titles">
        <p>Function</p>
        <p>Percentage (%)</p>
      </div>
      <CreateEntry name={props.name} data={props.data} callback={props.callback}/>

      <div className="percent-total">
        <p className="total-text"> Total % </p>
        <input className="user-input" id={props.name + "-total"} type="number" min="0" max="100" disabled="disabled" value={findTotal(props.data)}/>
      </div>

    </div>
  )
}

export default Percentages;

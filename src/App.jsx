import React, { useRef, useEffect, useState } from 'react';
import Prog from './components/Prog.jsx'
import Revenue from './components/Revenue.jsx'
import Expenses from './components/Expenses.jsx'
import Buttons from './components/Buttons.jsx'
import './css/App.css';

/* App */
function App() {
  // initialization
  let revData = [ 
    { name: "Medical Center", value: 0, color: "#F0BF00" }, 
    { name: "Student Fees", value: 0, color: "#F6E50E" }, 
    { name: "State of California", value: 0, color: "#FFF688" }, 
    { name: "Tuition", value: 0, color: "#5F63EC"}, 
    { name: "Research Grants and Contracts", value: 0, color: "#71A8FF"}, 
    { name: "Pell Grants", value: 0, color: "cyan" }, 
    { name: "Non-educational Services", value: 0, color: "#0F7AB4" }, 
    { name: "Gifts, Endowments, Interest, Etc.", value: 0, color: "#D4E4FF" }]

  let expData = [ 
    { name: "Medical Center", value: 0, color: "#F0BF00" }, 
    { name: "Teaching and Teaching Support", value: 0, color: "#F6E50E" }, 
    { name: "Research", value: 0, color: "#FFF688" }, 
    { name: "Student Services and Financial Aid", value: 0, color: "#5F63EC" }, 
    { name: "Operations and Maintenance (Buildings, etc)", value: 0, color: "#71A8FF" }, 
    { name: "Administration", value: 0, color: "cyan" }, 
    { name: "Non-Educational Services", value: 0, color: "#0F7AB4" }, 
    { name: "Public Service", value: 0, color: "#D4E4FF" }, 
    { name: "Depreciation, Interest, etc.", value: 0, color: "#E3A400"}]

  const [revUserData, setRevData] = useState(revData);
  const [expUserData, setExpData] = useState(expData);

  function changeRevData(newRevData) {
    setRevData(newRevData);
  }

  function changeExpData(newExpData) {
    setExpData(newExpData);
  }
       
  return (
    <div>
      <Prog/>
      <Revenue data={revUserData} callback={changeRevData}/>
      <Expenses data={expUserData} callback={changeExpData}/>
      <Buttons/>
    </div>
  )
}

export default App;


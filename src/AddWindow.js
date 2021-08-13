import React, {useState} from "react";
import './style.css';
import ColorCodes from './ColorCodes';

function AddWindow() {
  const[isVisible, setIsVisible] = useState("none");
  const[taskValue, setTaskValue] = useState("");

  function handleChange(event) {
    setTaskValue(event.target.value);
  }

  function openAddWindow() {
    setIsVisible("inline");
  }

  function closeAddWindow() {
    setIsVisible("none");
    setTaskValue("");
  }

  function addTask() {
    setIsVisible("none");
    document.getElementById('noTasks').style.display = "none";
  }

  return (
    <div className="AddWindow">

      <div id="popupGrey" style={{display: isVisible}}></div>

      <div id="popup" style={{display: isVisible}}>
        <div id="close" onClick={closeAddWindow}>X</div>
        <center>
          <div id="questions">What do you need to do?</div>
          <textarea value={taskValue} onChange={handleChange}></textarea>
          <div id="questions">How would you like to color code your task?</div>
          {/* dropdown */}
          <ColorCodes />
          <button id="addButton" onClick={addTask}>Add</button>
        </center>
      </div>

      <button id="plusButton" onClick={openAddWindow}>+</button>

    </div>
  )
}

export default AddWindow;

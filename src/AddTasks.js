import React, {useState} from "react";
import './style.css';
import ColorCodes from './ColorCodes';

function AddTasks() {
  const[isVisible, setIsVisible] = useState("none");
  const[taskValue, setTaskValue] = useState("");
  const[taskCounter, setTaskCounter] = useState(0); // to deal with edge case of repeat tasks
  const[labelStyle] = useState('3px solid');

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
    // remove pop up window and init text
    setIsVisible("none");
    document.getElementById('noTasks').style.display = "none";
    // add to task counter
    let tempTaskCounter = taskCounter;
    tempTaskCounter++;
    setTaskCounter(tempTaskCounter);
    // create label element
    let newLabel = document.createElement('label');
    newLabel.id = taskValue + taskCounter;
    newLabel.style.borderBottom = labelStyle + translateColor();
    // create input element
    let newInput = document.createElement('input');
    newInput.id = "input" + taskValue + taskCounter;
    newInput.type = 'checkbox';
    // create task div text element
    let newTaskDiv = document.createElement('div');
    newTaskDiv.id = 'taskText'; // styling in .css file
    newTaskDiv.innerHTML = taskValue;
    newTaskDiv.style.display = 'inline';
    // create line break element
    let brk = document.createElement('br');
    // append all elements
    newLabel.appendChild(newInput);
    newLabel.appendChild(newTaskDiv);
    newLabel.appendChild(brk);
    document.getElementById('tasks').appendChild(newLabel);
    document.getElementById('input' + taskValue + taskCounter).addEventListener('change', needStrikethrough);
    // reset task value for pop up window
    setTaskValue("");
  }

  function needStrikethrough(event) {
    const lineColor = translateColor();
    const input = event.target;
    const labelID = input.id.substring(5); // remove chars 'input' from "input" + taskValue id
    let curLabel = document.getElementById(labelID);
    let labelText = curLabel.children[1];
    if (input.checked) {
      curLabel.style.borderBottom = '0px';
      curLabel.style.textDecoration = 'line-through';
      curLabel.style.textDecorationColor = lineColor;
      labelText.style.color = 'rgba(0, 0, 0, 0.5)';
    } else {
      curLabel.style.borderBottom = labelStyle + lineColor;
      curLabel.style.textDecoration = 'none';
      labelText.style.color = 'rgba(0, 0, 0, 1)';
    }
  }

  function translateColor() {
    let resultingColor;
    let code = document.getElementById("curColor").getAttribute("value");
    if (code === null) {
      let theme = document.getElementById('theme').getAttribute('value');
      if (theme === "classic") {
        code = "classicRed";
      } else if (theme === "extreme") {
        code = "extremeRed";
      } else if (theme === "cool") {
        code = "coolPurple";
      } else if (theme === "warm") {
        code = "warmRed";
      }
    }
    // classic
    if (code === "classicRed") {
      resultingColor = "#ff0000";
    } else if (code === "classicYellow") {
      resultingColor = "#ffe600";
    } else if (code === "classicBlue") {
      resultingColor = "#0f2fff";
    } // extreme
    else if (code === "extremeRed") {
      resultingColor = "#f83812";
    } else if (code === "extremeOrange") {
      resultingColor = "#ee974b";
    } else if (code === "extremePink") {
      resultingColor = "#e6aace";
    } else if (code === "extremePurple") {
      resultingColor = "#6f58c9";
    } else if (code === "extremeBlue") {
      resultingColor = "#51e5ff";
    } else if (code === "extremeGreen") {
      resultingColor = "#81f49a";
    } // cool
    else if (code === "coolPurple") {
      resultingColor = "#5f4f93";
    } else if (code === "coolLightPurple") {
      resultingColor = "#d5d2ff";
    } else if (code === "coolLightBlue") {
      resultingColor = "#cee4fd";
    } else if (code === "coolBlue") {
      resultingColor = "#4d669c";
    } // warm
    else if (code === "warmRed") {
      resultingColor = "#910000";
    } else if (code === "warmOrange") {
      resultingColor = "#d44e00";
    } else if (code === "warmGolden") {
      resultingColor = "#ffb300";
    } else if (code === "warmYellow") {
      resultingColor = "#ffe08a";
    }
    return resultingColor;
  }

  return (
    <div className="AddTasks">


    {/* pop up window */}
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
      </div>


      {/* add task button */}
      <button id="plusButton" onClick={openAddWindow}>+</button>


      {/* added tasks */}
      <div className="TaskList">

        <center>
          <form id="tasks">
          </form>
        </center>

      </div>


    </div>
  )
}

export default AddTasks;

import React, {useState} from "react";
import './style.css';
import ColorCodes from './ColorCodes';

function AddTasks() {
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
    document.getElementById('tasks').innerHTML +=
      "<label style='border-bottom: 3px solid" + translateColor() + "'> <input type='checkbox' multiple={true} value={taskValue} onChange={handleChange} />"
      + taskValue + "</label><br></br>"
    setTaskValue("");
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

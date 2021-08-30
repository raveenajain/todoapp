import React, {useState, useEffect} from "react";
import './style.css';
import ColorCodes from './ColorCodes';
import globalColors from './GlobalColors';

function AddTasks() {
  const[isVisible, setIsVisible] = useState("none");
  const[taskValue, setTaskValue] = useState("");
  const[taskCounter, setTaskCounter] = useState(0); // to deal with edge case of repeat tasks
  const[labelStyle] = useState('3px solid');

  function handleChange(event) {
    setTaskValue(event.target.value);
  }

  // adjusts the height of the grey background of the popup to cover the whole
  // window as more tasks (and scrolling) are added
  useEffect(() => {
    document.getElementById('popupGrey').style.height = document.documentElement.scrollHeight + 'px';
  });

  // makes pop up window visible
  function openAddWindow() {
    setIsVisible("inline");
  }

  // closes pop up window
  function closeAddWindow() {
    setIsVisible("none");
    setTaskValue("");
  }

  // adds a label and input checkbox element to the form i.e. adds the users task
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
    newLabel.id = "label" + taskCounter;
    // create input element
    let newInput = document.createElement('input');
    newInput.id = "input" + taskValue + taskCounter;
    newInput.type = 'checkbox';
    // create task div text element
    let newTaskDiv = document.createElement('div');
    newTaskDiv.id = taskValue + taskCounter;
    newTaskDiv.style.display = 'block';
    newTaskDiv.style.textAlign = 'left';
    newTaskDiv.innerHTML = taskValue;
    newTaskDiv.style.display = 'inline';
    newTaskDiv.style.borderBottom = labelStyle;
    newTaskDiv.style.borderBottomColor = translateColor();
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

  // adds a strikethrough or line under task depending on if task is checked/completed
  function needStrikethrough(event) {
    const input = event.target;
    const textID = input.id.substring(5); // remove chars 'input' from "input" + taskValue id
    let curText = document.getElementById(textID);
    let borderColor = curText.style.borderBottomColor;
    let decorationColor = curText.style.textDecorationColor;
    if (input.checked) {
      curText.style.borderBottom = '0px';
      curText.style.textDecoration = 'line-through';
      curText.style.textDecorationColor = borderColor;
      curText.style.color = 'rgba(0, 0, 0, 0.5)';
    } else {
      curText.style.borderBottom = labelStyle;
      curText.style.borderBottomColor = decorationColor;
      curText.style.textDecoration = 'none';
      curText.style.color = 'rgba(0, 0, 0, 1)';
    }
  }

  // initially sets the color for the underline/strikethrough
  // the options the user has to select depends on the current theme
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
      resultingColor = globalColors('classicRed');
    } else if (code === "classicYellow") {
      resultingColor = globalColors('classicYellow');
    } else if (code === "classicBlue") {
      resultingColor = globalColors('classicBlue');
    } // extreme
    else if (code === "extremeRed") {
      resultingColor = globalColors('extremeRed');
    } else if (code === "extremeOrange") {
      resultingColor = globalColors('extremeOrange');
    } else if (code === "extremePink") {
      resultingColor = globalColors('extremePink');
    } else if (code === "extremePurple") {
      resultingColor = globalColors('extremePurple');
    } else if (code === "extremeBlue") {
      resultingColor = globalColors('extremeBlue');
    } else if (code === "extremeGreen") {
      resultingColor = globalColors('extremeGreen');
    } // cool
    else if (code === "coolPurple") {
      resultingColor = globalColors('coolPurple');
    } else if (code === "coolLightPurple") {
      resultingColor = globalColors('coolLightPurple');
    } else if (code === "coolLightBlue") {
      resultingColor = globalColors('coolLightBlue');
    } else if (code === "coolBlue") {
      resultingColor = globalColors('coolBlue');
    } // warm
    else if (code === "warmRed") {
      resultingColor = globalColors('warmRed');
    } else if (code === "warmOrange") {
      resultingColor = globalColors('warmOrange');
    } else if (code === "warmGolden") {
      resultingColor = globalColors('warmGolden');
    } else if (code === "warmYellow") {
      resultingColor = globalColors('warmYellow');
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
            <textarea value={taskValue} maxLength="200" onChange={handleChange}></textarea>
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
